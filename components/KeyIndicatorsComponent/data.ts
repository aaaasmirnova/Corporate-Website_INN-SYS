export interface IKeyCard {
  title: string;
  description: string;
  desktop: {
    translate: {
      x: string,
      y: string
    }
  },
  tablet: {
    translate: {
      x: string,
      y: string
    }
  }
};

export const cards: IKeyCard[] = [
  {
    title: '+50%',
    description: 'повышение точности прогнозирования с использованием моделей машинного обучения и сценарного анализа',
    desktop: {
      translate: {
        x: '20%',
        y: '-10%'
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
    }
  },
  {
    title: '+60%',
    description: 'ускорение подготовки управленческих решений за счёт автоматизации аналитики и объединения данных',
    desktop: {
      translate: {
        x: '20%',
        y: '20%'
      },
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
    }
  },
  {
    title: '+70%',
    description: 'снижение объёма ручной обработки данных благодаря ИИ-агентам и автоматическим аналитическим процессам',
    desktop: {
      translate: {
        x: '-5%',
        y: '-50%'
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      }
    }
  },
  {
    title: 'в 4 раза',
    description: 'быстрее выявление аномалий и рисков через интеллектуальный мониторинг данных',
    desktop: {
      translate: {
        x: '-10%',
        y: '-50%'
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      }
    }
  },
]