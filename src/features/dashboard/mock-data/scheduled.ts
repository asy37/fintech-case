import { ScheduledType } from "../../../shared/types/scheduled-type";

export const TransfersMock: ScheduledType = {
  success: true,
  message: 'Scheduled transfers retrieved successfully.',
  data: {
    transfers: [
      {
        id: 'sch_001',
        name: 'Saleh Ahmed',
        image:
          'https://ui-avatars.com/api/?name=Saleh+Ahmed&background=random&size=100',
        date: '2022-04-28T11:00:00Z',
        amount: -435,
        currency: '$',
        status: 'scheduled',
      },
      {
        id: 'sch_002',
        name: 'Saleh Ahmed',
        image:
          'https://ui-avatars.com/api/?name=Saleh+Ahmed&background=random&size=100',
        date: '2022-04-28T11:00:00Z',
        amount: -435,
        currency: '$',
        status: 'scheduled',
      },
      {
        id: 'sch_003',
        name: 'Saleh Ahmed',
        image:
          'https://ui-avatars.com/api/?name=Saleh+Ahmed&background=random&size=100',
        date: '2022-04-28T11:00:00Z',
        amount: -435,
        currency: '$',
        status: 'scheduled',
      },
      {
        id: 'sch_004',
        name: 'Saleh Ahmed',
        image:
          'https://ui-avatars.com/api/?name=Saleh+Ahmed&background=random&size=100',
        date: '2022-04-28T11:00:00Z',
        amount: -435,
        currency: '$',
        status: 'scheduled',
      },
    ],
    summary: {
      totalScheduledAmount: -2056,
      count: 5,
    },
  },
}
