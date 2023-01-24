import * as Dialog from "@radix-ui/react-dialog";
import {
  InfoContainer,
  ModalClose,
  ModalContent,
  ModalTitle,
} from "../styles/components/Cart";
import { X } from "phosphor-react";
import { CartItem } from "./CartItem";
export function Cart() {
  return (
    <Dialog.Portal>
      <ModalContent>
        <ModalClose>
          <X size={24} />
        </ModalClose>
        <ModalTitle>Sacola de compras</ModalTitle>
        <CartItem />
        <InfoContainer>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>R$ 270,00</strong>
          </div>
          <button>Finalizar compra</button>
        </InfoContainer>
      </ModalContent>
    </Dialog.Portal>
  );
}