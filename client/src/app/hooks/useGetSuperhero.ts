import { getSuperheroes } from "@/service/superhero.service";
import { useQuery } from "@tanstack/react-query";

export const useGetSuperheroes = () => {
  return useQuery({
    queryKey: ["superheroes"],
    queryFn: getSuperheroes,
  });
};
