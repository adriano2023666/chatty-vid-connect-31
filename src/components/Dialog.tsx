import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function MyDialog({ children, title, description, ...props }) {
  return (
    <Dialog {...props}>
      <DialogContent>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogDescription>
          {description || "Please provide a description for this dialog"}
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;