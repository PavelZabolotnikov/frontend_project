import * as React from 'react';
import Box from '@mui/material/Box';
import './UserItem.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { User } from './types';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1600,
};

export default function UserItem({ user}:{user: User}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> 
      <div className="card">
        <h3>{user.name}</h3>
        <p>Номер пилота: {user.number}</p>
        <img className="pilotPhoto" src={user.photo} />
      </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="modelCard" >
            <div className="cardHead">
                <div><img className="pilotPhoto" src={user.photo} /></div>
                <div>
                <p>{user.name}</p>
                <p>Номер пилота: {user.number}</p>
                <p>Город: {user.city}</p>
                <p>Команда: {user.team}</p>
                <p>Автомобиль: {user.car}</p>
                <p>Двигатель: {user.engine}</p>
                </div>
             </div>
              <div className="car">
                  <img src={user.carPhoto} />
              </div>
           </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}