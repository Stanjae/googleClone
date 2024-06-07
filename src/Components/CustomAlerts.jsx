/* eslint-disable react/prop-types */
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomAlerts({open, message, handleClose}) {
 

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={message.type === "error" ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%', color:'#fff' }}
        >
          {message?.text}
        </Alert>
      </Snackbar>
    </div>
  );
}
