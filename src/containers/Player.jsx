/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/components/Player.scss';
import NotFoun from './NotFoun';

const Player = (props) => {

  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.push('/home')}>
          regresar
        </button>
      </div>
    </div>
  ) : <NotFoun />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
