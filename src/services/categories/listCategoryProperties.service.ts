import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import AppError from "../../errors/appError";

const listCategoryPropertiesService = async (id: string): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({ id });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listCategoryPropertiesService;
