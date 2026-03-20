import { render, screen } from '@testing-library/react';
import { WaterFountainCard } from '@/components/ui/WaterFountainCard';
// Mock dos dados base (para não repetir código)
const baseData = {
  id: 'test-1',
  name: 'Bebedouro Teste',
  location: 'Corredor',
  current_temperature: 0,
  temperature: 0,
  filterStatus: 'GOOD',
  createdAt: '2026-01-01',
  updatedAt: '2026-01-01',
  last_updated_time: '12:00',
};


describe('Component: WaterFountainCard', () => {

    it('should render correctly as "blue" theme when temperature < 10', () => {

      render(
        <WaterFountainCard
          data ={{
            ...baseData,
            current_temperature: 9,
          }}
        />

      );
    const tempText = screen.getByText('9.0');
    expect(tempText).toBeInTheDocument();

    const card = tempText.closest('div.bg-blue-500');
    expect(card).toBeInTheDocument();
    });

    it('should render correctly as "Yellow" theme when temperature = 10', () => {

      render(
        <WaterFountainCard
          data ={{
            ...baseData,
            current_temperature: 10,
          }}
        />

      );
    const tempText = screen.getByText('10.0');
    expect(tempText).toBeInTheDocument();

    const card = tempText.closest('div.bg-yellow-dark');
    expect(card).toBeInTheDocument();
    });

    it('should render correctly as "Yellow" theme when temperature = 20', () => {

      render(
        <WaterFountainCard
          data ={{
            ...baseData,
            current_temperature: 20,
          }}
        />

      );
    const tempText = screen.getByText('20.0');
    expect(tempText).toBeInTheDocument();

    const card = tempText.closest('div.bg-yellow-dark');
    expect(card).toBeInTheDocument();
    });

    it('should render correctly as "Orange" theme when temperature = 21', () => {

      render(
        <WaterFountainCard
          data ={{
            ...baseData,
            current_temperature: 21,
          }}
        />

      );
    const tempText = screen.getByText('21.0');
    expect(tempText).toBeInTheDocument();

    const card = tempText.closest('div.bg-orange-dark');
    expect(card).toBeInTheDocument();
    });



});
