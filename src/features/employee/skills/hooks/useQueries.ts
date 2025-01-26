import {
  getCoreCompetencies,
  getLanguages,
  getProficiencyLevels,
  getSkillCategories,
  getSkills,
  getSkillSubcategories,
} from '@/features/employee/skills/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useCoreCompetencies = () => {
  return useQuery({
    queryKey: ['coreCompetencies'],
    queryFn: getCoreCompetencies,
  });
};

export const useProficiencyLevels = () => {
  return useQuery({
    queryKey: ['proficiencyLevels'],
    queryFn: getProficiencyLevels,
  });
};

export const useSkillCategories = () => {
  return useQuery({
    queryKey: ['skillCategories'],
    queryFn: getSkillCategories,
  });
};

export const useSkillSubcategories = (category: string) => {
  return useQuery({
    queryKey: ['skillSubcategories', { category }],
    queryFn: () => getSkillSubcategories(category),
    enabled: !!category,
  });
};

export const useSkills = (subcategory: string) => {
  return useQuery({
    queryKey: ['skills', { subcategory }],
    queryFn: () => getSkills(subcategory),
    enabled: !!subcategory,
  });
};

export const useLanguages = () => {
  return useQuery({
    queryKey: ['languages'],
    queryFn: getLanguages,
  });
};
