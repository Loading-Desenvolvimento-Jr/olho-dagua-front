import { render, screen } from '@testing-library/react';
import { FilterStatusCard, FilterStatus } from '@/components/ui/FilterStatusCard';

// Mock dos dados base (para não repetir código)
const baseData = {
  id: 'test-1',
  name: 'Bebedouro Teste',
  location: 'Corredor',
  temperature: 20,
  createdAt: '2026-01-01',
  updatedAt: '2026-01-01',
  last_updated_time: '12:00',
};

describe('Component: FilterStatusCard', () => {
  
  it('should render correctly with "excellent" status (Green)', () => {
    // Renderizar o componente com status EXCELLENT
    render(
      <FilterStatusCard 
        data={{ 
          ...baseData, 
          filterStatus: 'excellent' as FilterStatus 
        }} 
      />
    );

    // Verificar se o texto "Excelente" está na tela
    const titleElement = screen.getByText('Excelente');
    expect(titleElement).toBeInTheDocument();

    // Verificar se o subtítulo "Filtro Limpo" também apareceu
    expect(screen.getByText('Filtro Limpo')).toBeInTheDocument();
    const cardContainer = titleElement.closest('div.bg-green-dark');            // Verificar cor do card
    expect(cardContainer).toBeInTheDocument();                                  
  });

  it('should render correctly with "maintenance" status (Yellow)', () => {
    // Renderizar o componente com status MAINTENANCE
    render(
      <FilterStatusCard 
        data={{ 
          ...baseData, 
          filterStatus: 'maintenance' as FilterStatus 
        }} 
      />
    );

    // Verificar se mudou o texto para "Em Manutenção"
    expect(screen.getByText('Em Manutenção')).toBeInTheDocument();
    
    // Conferir mudança de tema
    const titleElement = screen.getByText('Em Manutenção');                   // Verificar Título 
    const cardContainer = titleElement.closest('div.bg-yellow-light');        // Verificar Cor 
    expect(cardContainer).toBeInTheDocument();
  });

  it('should render correctly with "substitute" status (Red)', () => {
  // Renderizar o componente com status SUBSTITUTE
  render(
    <FilterStatusCard 
      data={{ 
        ...baseData, 
        filterStatus: 'substitute' as FilterStatus 
      }} 
    />
  );

  // Verificar se mudou o texto para "Substituir"
  expect(screen.getByText('Substituir')).toBeInTheDocument();
  
  // Conferir mudança de tema
  const titleElement = screen.getByText('Substituir');                        // Verificar Título 
  const cardContainer = titleElement.closest('div.bg-\\[\\#dc2626\\]');       // Verificar Cor 
  expect(cardContainer).toBeInTheDocument();
});

  it('should render as  with "maintenance" when receive empty string', () => {
    // Renderizar o componente com status MAINTENANCE
    render(
      <FilterStatusCard 
        data={{ 
          ...baseData, 
          filterStatus: '' as FilterStatus 
        }} 
      />
    );

    // Verificar se mudou o texto para "Substituir"
    expect(screen.getByText('Em Manutenção')).toBeInTheDocument();
    
    // Conferir mudança de tema
    const titleElement = screen.getByText('Em Manutenção');                   // Verificar Título 
    const cardContainer = titleElement.closest('div.bg-yellow-light');        // Verificar Cor 
    expect(cardContainer).toBeInTheDocument();
  });


});

