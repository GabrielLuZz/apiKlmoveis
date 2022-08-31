import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import AppError from "../../errors/appError";
import categoryRoutes from "../../routes/category.routes";

const listCategoryPropertiesService = async (id: string): Promise<Category> => {
  const propertieRepository = AppDataSource.getRepository(Property);
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({ id });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listCategoryPropertiesService;
