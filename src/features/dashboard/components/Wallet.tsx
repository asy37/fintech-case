import ChipIcon from '@/assets/icons/Chip'
import { WalletType } from '../types/wallet-type'
import WifiIcon from '@/assets/icons/WifiIcon'
import VisaIcon from '@/assets/icons/VisaIcon'
import MasterCardIcon from '@/assets/icons/MasterCardIcon'
import { cn } from '@/lib/utils'

export const Wallet = ({ rawData }: { rawData: WalletType }) => {
  return (
    <div className='relative'>
      {rawData.data.cards.slice(-2).map((item, index) => {
        const isFirst = index === 0
        const isSecond = index === 1
        return (
          <div
            key={item.id}
            className={cn(
              'item-start flexflex-col rounded-2xl ',
              isFirst &&
                'from-slate-dark to-onyx h-[210px] w-[354px] bg-gradient-to-br p-[30px]',
              isSecond && 'absolute z-10 top-32 left-4 h-[172px] w-[324px] bg-neutral-gray/10 backdrop-blur-sm p-4',
            )}
          >
            {(() => {
              const [brand, bank] = item.bank
                .split('|')
                .map((str) => str.trim())
              return (
                <div className="flex items-center gap-2">
                  <span className="text-base font-normal text-white">
                    {brand}
                  </span>
                  <span
                    className={cn(
                      'text-base font-medium',
                      isFirst ? 'text-light-grey' : 'text-white',
                    )}
                  >
                    |
                  </span>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      isFirst ? 'text-light-grey' : 'text-white',
                    )}
                  >
                    {bank}
                  </span>
                </div>
              )
            })()}
            <div className={cn("flex w-full items-center justify-between", isFirst ? 'mt-[30px]':'mt-4')}>
              <ChipIcon />
              <WifiIcon />
            </div>
            <div className="mt-5 flex w-full flex-col">
              <span
                className={cn(
                  'text-lg font-bold',
                  isFirst ? 'text-white' : 'text-midnight-blue',
                )}
              >
                {item.cardNumber}
              </span>
              <div className="flex w-full items-center justify-between">
                <span
                  className={cn(
                    'text-lg font-bold',
                    isFirst ? 'text-white' : 'text-cadet-blue',
                  )}
                >
                  {item.expiryMonth}/{item.expiryYear}
                </span>
                {item.network === 'Visa' ? (
                  <span className="rounded bg-white">
                    <VisaIcon />
                  </span>
                ) : (
                  <MasterCardIcon />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
