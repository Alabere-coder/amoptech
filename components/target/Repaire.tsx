import { useState } from 'react';
import ButtonPrimary from '../ButtonPrimary';
import repaireStyles from '../../styles/Target.module.css'
import { Dropdown, Menu, Button } from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

type CityData = [string, string[]][];

interface SellPrpos {}

const data: CityData = [
    ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
    ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
    ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
    ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];


const dropList = (
    <Menu className={repaireStyles.sub}>
        {data.map((city: [string, string[]], outerIndex: number) => {
        if (city.length > 1) {
            const districts = city[1];
            return (
            <SubMenu key={outerIndex} title={<span>{city[0]}</span>}>
                {districts.map((district: string, innerIndex: number) => {
                return (
                    <MenuItem key={`${outerIndex}_${innerIndex}`}>{districts[innerIndex]}</MenuItem>
                );
                })}
            </SubMenu>
            );
        }
        return <MenuItem key={outerIndex}>{city[0]}</MenuItem>;
        })}
    </Menu>
);

const Repaire = () => {
    
  return (
    <div>
        <div className='dropdown-demo'>
            <Dropdown trigger='click' droplist={dropList} position='bl'>
                <div  className={repaireStyles.icon}>
                    <Button className={repaireStyles.btn} type='text'>
                        Repaire
                    <IconDown />
                    </Button>
                </div>
            </Dropdown>
        </div>
    </div>
  )
}

export default Repaire