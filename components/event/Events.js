import EventsData from '../../lib/data/EventsData';
import EventCard from './EventCard';
import Styles from './event.module.css';

function Events() {
  return (
    <section className={Styles.event}>
      <div className={Styles.cardContainer}>
        {EventsData.map((item, index) => {
          return (
            <EventCard
              title={item.title}
              description={item.description}
              link={item.link}
              bgImage={item.bgImage}
              key={`${index + item.title}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Events;
