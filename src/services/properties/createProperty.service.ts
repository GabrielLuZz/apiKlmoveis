import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { IPropertyRequest } from "../../interfaces/properties";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/category.entity";
import AppError from "../../errors/appError";

const createPropertyService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("category not found", 404);
  }

  const alreadyAdress = await addressRepository.findOneBy({
    zipCode: address.zipCode,
  });

  if (alreadyAdress) {
    throw new AppError("Property already exists");
  }

  const propertyAddress = addressRepository.create(address);

  await addressRepository.save(propertyAddress);

  const property = propertyRepository.create({
    value,
    size,
    address: propertyAddress,
    category,
  });

  await propertyRepository.save(property);

  return property;
};

export default createPropertyService;
