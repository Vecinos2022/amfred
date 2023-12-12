import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'

interface ModalProps {
  title?: string | undefined
  contentButton: JSX.Element | string
  children: React.ReactNode
  isDismissable?: boolean
  size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full'
    | undefined
}

const ModalWithBtn: React.FC<ModalProps> = ({
  title,
  contentButton,
  children,
  size,
  isDismissable = false
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button variant="solid" color="primary" onPress={onOpen}>
        {contentButton}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
        isDismissable={isDismissable}
        placement="top"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-foreground">
                {title}
              </ModalHeader>
              <ModalBody className="text-foreground">{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalWithBtn
