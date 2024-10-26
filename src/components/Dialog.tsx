import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";

export function MyDialog({ children, ...props }) {
  return (
    <Dialog {...props}>
      <DialogContent aria-describedby="dialog-description">
        <DialogDescription id="dialog-description">
          {/* Add your dialog description here */}
          Dialog content description
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;