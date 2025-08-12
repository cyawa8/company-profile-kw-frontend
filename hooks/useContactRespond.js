import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useContactRespond() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch("https://api.kiwi.co.id/api/contacts-respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    },
    onSuccess: () => {
        queryClient.invalidateQueries(["contact-respond"]);
    },
  });

  return mutation;
}
