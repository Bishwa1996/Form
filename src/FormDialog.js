import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="header">
    <h1>Form</h1>
    <div className="container">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Product Details</DialogTitle>
        <DialogContent>
          
          <TextField
            autoComplete= "new-name"
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
          autoComplete= "new-description"
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
          />
          <TextField
          autoComplete= "new-price"
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
          />
          <TextField
          autoComplete= "new-length"
            autoFocus
            margin="dense"
            id="length"
            label="Length"
            type="number"
            fullWidth
          />
          <TextField
          autoComplete= "onew-breadth"
            autoFocus
            margin="dense"
            id="breadth"
            label="Breadth"
            type="number"
            fullWidth
          />
          <TextField
          autoComplete= "new-height"
            autoFocus
            margin="dense"
            id="height"
            label="Height"
            type="number"
            fullWidth
          />   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
        
      </Dialog>
    </div>
    </div>
  );
}
export default FormDialog;