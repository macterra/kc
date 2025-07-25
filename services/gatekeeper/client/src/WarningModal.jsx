import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    DialogContentText,
} from "@mui/material";

const WarningModal = ({ isOpen, title, warningText, onSubmit, onClose }) => {
    if (!isOpen) return null;

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    function handleClose() {
        onClose();
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="confirm-dialog-description">
                        {warningText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default WarningModal;
