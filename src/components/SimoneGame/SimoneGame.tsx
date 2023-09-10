import { useEffect, useState } from 'react';

import cn from "classnames";

import style from './Simone.module.css';
import { ColorType, Order } from './types';
import { getRandomColor, sleep } from './helpers';
import { FailModal } from './components/FailModal';


export const SimoneGame = () => {

  const [order, setOrder] = useState<Order>(Order.BOT);

  const [bot, setBot] = useState<string[]>([getRandomColor(), getRandomColor(), getRandomColor()]);

  const [_, setUser] = useState<ColorType[]>([]);

  const [index, setIndex] = useState(0);

  const [botMove, setBotMove] = useState("");

  const [openFailModal, setOpenFailModal] = useState(false);

  const handleClickColor = (color: ColorType) => {
    if (order === Order.USER) {
      if (color === bot[index]) {
        setUser(prev => [...prev, color]);
        setIndex(prev => ++prev);
        if (index === bot.length - 1) {

          setUser([]);
          setIndex(0);
          setBot(prev => [...prev, getRandomColor()]);
        }
      } else {
        setOpenFailModal(true);
      }

    }
  }


  useEffect(() => {
    const renderBotMoves = async () => {

      await setOrder(Order.BOT)

      for (let i = 0; i < bot.length; i++) {
        await sleep(500);
        setBotMove(bot[i]);
        await sleep(500);
        setBotMove("")
      }
      await setOrder(Order.USER);

    }
    renderBotMoves();
    // setOrder("user");

  }, [bot]);



  return (
    <div>

      <FailModal opened={openFailModal} onClose={() => setOpenFailModal(false)} />

      <h4>Order: {order}</h4>

      <div className={style.container}>

        <button
          style={{ background: "green", }}
          onClick={() => handleClickColor("green")}
          className={cn(style.button, botMove === "green" && style.animationClass)}
        />

        <button
          style={{ background: "red", }}
          onClick={() => handleClickColor("red")}
          className={cn(style.button, botMove === "red" && style.animationClass)}
        />

        <button
          style={{ background: "yellow", }}
          onClick={() => handleClickColor("yellow")}
          className={cn(style.button, botMove === "yellow" && style.animationClass)}
        />

        <button
          style={{ background: "blue", }}
          onClick={() => handleClickColor("blue")}
          className={cn(style.button, botMove === "blue" && style.animationClass)}
        />

      </div>

    </div>
  )
}