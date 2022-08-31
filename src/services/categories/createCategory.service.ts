import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import AppError from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({ name });

  if (category) {
    throw new AppError("category already exists");
  }

  const newCategory = categoryRepository.create({
    name,
  });

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
