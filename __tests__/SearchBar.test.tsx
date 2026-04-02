import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '@/components/ui/SearchBar';

describe('Component: SearchBar', () => {
  // Criamos uma função "espiã" para monitorar se ela foi chamada e com quais argumentos
  const mockOnFilterChange = jest.fn();

  // Limpamos a memória do espião antes de cada teste
  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('should render the input field correctly', () => {
    render(<SearchBar selectedFilters={[]} onFilterChange={mockOnFilterChange} />);
    const inputElement = screen.getByPlaceholderText('Pesquisar...');   // Verifica se o input com o placeholder existe na tela
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onFilterChange with the new location when an unselected chip is clicked', () => {
    render(<SearchBar selectedFilters={[]} onFilterChange={mockOnFilterChange} />);

    const mucambinhoChip = screen.getByRole('button', { name: /Mucambinho/i });
    
    // Simula o clique do usuário
    fireEvent.click(mucambinhoChip);

    // EXPECTATIVA: A função espiã tem que ter sido chamada enviando um array com ['Mucambinho']
    expect(mockOnFilterChange).toHaveBeenCalledWith(['Mucambinho']);
    expect(mockOnFilterChange).toHaveBeenCalledTimes(1); // Garante que só chamou 1 vez
  });

  it('should call onFilterChange removing the location when a selected chip is clicked', () => {
    // Agora o componente já começa com dois locais selecionados
    render(
      <SearchBar 
        selectedFilters={['Mucambinho', 'Biblioteca']} 
        onFilterChange={mockOnFilterChange} 
      />
    );
    
    // Busca o chip do "Mucambinho" (que agora é um chip azul/verde com o X de remover)
    const activeChip = screen.getByRole('button', { name: /Mucambinho/i });
    
    // Simula o clique no botão para remover
    fireEvent.click(activeChip);

    // EXPECTATIVA: A função envia o novo array sem o Mucambinho (só sobrou a Biblioteca)
    expect(mockOnFilterChange).toHaveBeenCalledWith(['Biblioteca']);
  });

  it('should update the input value when typing', () => {
    render(<SearchBar selectedFilters={[]} onFilterChange={mockOnFilterChange} />);
    
    const inputElement = screen.getByPlaceholderText('Pesquisar...');
    
    // Simula o usuário clicando no input e digitando "Odon"
    fireEvent.change(inputElement, { target: { value: 'Odon' } });

    // Verifica se o valor que o input está mostrando na tela mudou para "Odon"
    expect(inputElement).toHaveValue('Odon');
  });
});