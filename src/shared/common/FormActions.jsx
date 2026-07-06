import { Button } from "react-bootstrap";

function FormActions({
  onCancel,
  isSubmitting,
  submitText = "Save",
  cancelText = "Cancel",
}) {
  return (
    <div className="d-flex justify-content-end gap-2 mt-3">
      <Button
        variant="outline-secondary"
        type="button"
        onClick={onCancel}
      >
        {cancelText}
      </Button>

      <Button type="submit" disabled={isSubmitting}
       
      
      >
        {isSubmitting ? "Saving..." : submitText}
      </Button>
    </div>
  );
}

export default FormActions;