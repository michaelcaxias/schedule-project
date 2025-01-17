import React from 'react';

import SelectTime from '../../components/SelectTime/SelectTime';
import SelectColors from '../../components/SelectColors/SelectColors';
import TextArea from '../../components/TextArea/TextArea';
import AddEventButton from '../../components/AddEventButton/AddEventButton';

import { AppWrap, MotionWrap } from '../../wrapper';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Scheduler.scss';

const Scheduler = () => {
  const homePage = (
    <section className="home-page">
      <aside className="aside-content">
        <TextArea />
      </aside>

      <main className="schedule-content">
        <div>
          <h1>Agende seus Horários</h1>

          <div className="schedule-configs">
            <h5>Notificação:</h5>
            <section className="input-group">
              <SelectTime />
              <SelectColors />
            </section>
            <h4>Em breve mais configurações...</h4>
          </div>
        </div>

        <div className="schedule-footer">
          <div className="schedule-content-buttons">
            <AddEventButton />
          </div>
        </div>
      </main>
    </section>
  );
  return homePage;
};

export default AppWrap(MotionWrap(Scheduler, 'app__scheduler'), Header, Footer, 'scheduler', 'app__scheduler');
