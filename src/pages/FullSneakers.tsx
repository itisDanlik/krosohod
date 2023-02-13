import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullSneakers: React.FC = () => {
  const [sneakers, setSneakers] = React.useState<{
    imgUrl: string; title: string; price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchSneakers() {
      try {
        const { data } = await axios.get('https://63d15a2e120b32bbe8f6ced9.mockapi.io/items/' + id);
        setSneakers(data);
      } catch (error) {
        alert('Ошибка при получении кроссовок');
        navigate('/');
      }
    }
    fetchSneakers();
  }, []);

  if (!sneakers) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className="container">
      <img src={sneakers.imgUrl} />
      <h2>{sneakers.title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolores neque similique
        expedita molestiae ab? Ut, consectetur optio sit dignissimos et perspiciatis nemo numquam
        facere quos fuga rem tempora doloribus.
      </p>
      <h4>{sneakers.price}</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullSneakers;
