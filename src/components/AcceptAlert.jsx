import { Button } from "@/components/ui/button";

export function AcceptAlert() {
  return (
    <Button
      variant="outline"
      /* onClick={() =>
        toast("Driver Sara has been selected", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      } */
    >
      Show Toast
    </Button>
  );
}
