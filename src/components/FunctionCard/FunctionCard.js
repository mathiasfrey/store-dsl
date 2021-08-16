import React from 'react'
import Classes from './FunctionCard.module.css';
import {BASE_URL} from '../../utils/api';

export default function FunctionCard({item}) {
  const functionCardData = { ...item };
  const { productImage, title, subtitle } = functionCardData;
  console.log(`${BASE_URL}${productImage.formats.thumbnail.url}`);
  return (
    <div className={Classes.FunctionCardWrapper}>
      <div className={Classes.FunctionCard}>
        <div className={Classes.Image} style={{ backgroundImage: `url(${BASE_URL}${productImage.url})`}}></div>
        <div>
        <p className={Classes.Title}>{title}</p>
        <p className={Classes.Subtitle}>
          {subtitle.slice(0, 40)}
          {subtitle.length > 40 ? "..." : null}
        </p>
        </div>
      </div>
    </div>
  )
}
