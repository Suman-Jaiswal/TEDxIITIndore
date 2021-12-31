import React from 'react'
import './Gallery.css'
import { Box, Card, CardActionArea, CardContent, CardMedia, Modal, Typography } from '@mui/material'

function Gallery(gallery) {
  const { link } = gallery.gallery

  const [open, setOpen] = React.useState(false);
  const [modalobj, setObj] = React.useState({});

  const handleOpen = (obj) => {
    setObj(obj);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    setObj({});
  };


  return (
    <>
      <img src={link} alt="..." onClick={() => handleOpen({ link })} />

      <Modal open={open}>
        <div id="image-viewer">
          <span class="close" onClick={handleClose}>&times;</span>
          <img class="modal-content" id="full-image" src={modalobj.link} />
        </div>
      </Modal>
    </>
  )
}

export default Gallery