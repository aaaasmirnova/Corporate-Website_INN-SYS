export interface IKeyCard {
  id: number;
  title: string;
  description: string;
  desktop: {
    translate: {
      x: string,
      y: string
    },
    col: {
      start: string,
      end: string
    },
    row: {
      start: string,
      end: string
    }
  },
  tablet: {
    translate: {
      x: string,
      y: string
    },
    col: {
      start: string,
      end: string
    },
    row: {
      start: string,
      end: string
    }
  }
};

export const cards: IKeyCard[] = [
  {
    id: 1,
    title: '+50%',
    description: 'повышение точности прогнозирования с использованием моделей машинного обучения и сценарного анализа',
    desktop: {
      translate: {
        x: '20%',
        y: '-10%'
      },
      col: {
        start: '2',
        end: ''
      },
      row: {
        start: '1',
        end: ''
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
      col: {
        start: '',
        end: ''
      },
      row: {
        start: '',
        end: ''
      }
    }
  },
  {
    id: 2,
    title: '+60%',
    description: 'ускорение подготовки управленческих решений за счёт автоматизации аналитики и объединения данных',
    desktop: {
      translate: {
        x: '20%',
        y: '20%'
      },
      col: {
        start: '8',
        end: ''
      },
      row: {
        start: '1',
        end: ''
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
      col: {
        start: '',
        end: ''
      },
      row: {
        start: '',
        end: ''
      }
    }
  },
  {
    id: 3,
    title: '+70%',
    description: 'снижение объёма ручной обработки данных благодаря ИИ-агентам и автоматическим аналитическим процессам',
    desktop: {
      translate: {
        x: '-5%',
        y: '-50%'
      },
      col: {
        start: '2',
        end: ''
      },
      row: {
        start: '5',
        end: ''
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
      col: {
        start: '',
        end: ''
      },
      row: {
        start: '',
        end: ''
      }
    }
  },
  {
    id: 4,
    title: 'в 4 раза',
    description: 'быстрее выявление аномалий и рисков через интеллектуальный мониторинг данных',
    desktop: {
      translate: {
        x: '-10%',
        y: '-50%'
      },
      col: {
        start: '7',
        end: ''
      },
      row: {
        start: '4',
        end: ''
      }
    },
    tablet: {
      translate: {
        x: '0px',
        y: '0px'
      },
      col: {
        start: '',
        end: ''
      },
      row: {
        start: '',
        end: ''
      }
    }
  },
]