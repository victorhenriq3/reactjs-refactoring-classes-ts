import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import {Input} from '../Input';

interface IProps{
  isOpen: boolean
  setIsOpen: () => void
  editingFood: FoodData
  handleUpdateFood: (data: FoodData) => Promise<void>
}

interface FoodData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

function ModalEditFood({isOpen, setIsOpen, editingFood, handleUpdateFood}: IProps) {
  const formRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(data: FoodData) {
    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export { ModalEditFood} ;
