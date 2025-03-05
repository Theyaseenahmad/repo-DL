import Image from 'next/image';
import React from 'react';
import { useSidebar } from '../../ui/sidebar';
import { MenuProps } from './MainMenuItem';
import { useIsMobile } from '@/hooks/use-mobile';

const OthersItem = (props: MenuProps) => {
    const { open } = useSidebar(); 
    const { name, path } = props;

      const isMobile = useIsMobile();

    return (
        <div className='flex justify-start gap-4 items-center w-full md:justify-center lg:justify-start'>
            <div>
                <Image 
                    alt={name} 
                    className='bg-cover bg-center' 
                    width={24} 
                    height={24} 
                    src={path} 
                />
            </div>
           
            {(open || isMobile) && <div>{name}</div>}
        </div>
    );
};

export default OthersItem;
