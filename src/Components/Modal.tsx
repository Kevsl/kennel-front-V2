import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { Box, Modal } from '@mui/material'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { UpdateAnimalForm } from './UpdateAnimal'
import { AnimalProps } from '@/Utils/types'

type ModalUpdateProps = {
  animalProps: AnimalProps
  setIsReloadNeeded: any
}

export const ModalComponent = ({
  animalProps,
  setIsReloadNeeded,
}: ModalUpdateProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    width: '60%',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <div className="h-full  overflow-scroll">
      <button onClick={handleOpen}>Edit animal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <span
              className="absolute right-10 top-10 cursor-pointer"
              onClick={handleClose}
            >
              <IoIosCloseCircleOutline color="#000" size={48} />
            </span>
            <UpdateAnimalForm
              animalProps={animalProps}
              setIsReloadNeeded={setIsReloadNeeded}
              handleClose={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
