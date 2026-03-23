import { render, screen } from '@testing-library/react';
import { WaterFountainCard } from '@/components/ui/WaterFountainCard';

// Mock dos dados base
const baseData = {
  id: 'test-1',
  name: 'Bebedouro Teste',
  location: 'Corredor',
  temperature: 0,
  filterStatus: 'GOOD',
  createdAt: '2026-01-01',
  updatedAt: '2026-01-01',
  last_updated_time: '12:00',
};

describe('Component: WaterFountainCard', () => {

  it('should render correctly as "blue" theme when temperature < 10', () => {
    const { container } = render(
      <WaterFountainCard
        data={{
          ...baseData,
          temperature: 9,
        }}
      />
    );
    
    expect(screen.getByText('9.0')).toBeInTheDocument();
    
    expect(container.firstChild).toHaveClass('bg-[#17A1FA]');
  });

  it('should render correctly as "Yellow" theme when temperature = 10', () => {
    const { container } = render(
      <WaterFountainCard
        data={{
          ...baseData,
          temperature: 10,
        }}
      />
    );
    
    expect(screen.getByText('10.0')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('bg-[#F1C40F]');
  });

  it('should render correctly as "Yellow" theme when temperature = 19', () => {
    const { container } = render(
      <WaterFountainCard
        data={{
          ...baseData,
          temperature: 19,
        }}
      />
    );
    
    expect(screen.getByText('19.0')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('bg-[#F1C40F]');
  });

  it('should render correctly as "Orange" theme when temperature >= 20', () => {
    const { container } = render(
      <WaterFountainCard
        data={{
          ...baseData,
          temperature: 20,
        }}
      />
    );
    
    expect(screen.getByText('20.0')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('bg-[#FA7B17]');
  });

});