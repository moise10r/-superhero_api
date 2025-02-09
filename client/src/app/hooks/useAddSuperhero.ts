import { addSuperhero } from "@/service/superhero.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddSuperhero = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSuperhero,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["superheroes"] });
    },
  });
};
