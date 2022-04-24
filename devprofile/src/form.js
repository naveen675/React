import React from 'react';
import giticon from './Images/iconfinder_github_317712.png';
import linkedicon from './Images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codecheficon from './Images/codechef-1324440139527402917_32.png';
import hackericon from './Images/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitericon from './Images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumicon from './Images/iconfinder_Circled_Medium_svg5_5279113.png';
import {useNavigate} from 'react-router-dom';

function Input(props) {
  var id = props.id;
  var type = props.type;
  var placeholder = props.placeholder;

  return <input type={type} id={id} placeholder={placeholder} />;
}

function Image(props) {
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  return <img id={id} src={src} alt={alt} />;
}

function Form() {

    const navigate = useNavigate();

  return (
    <form className="devAddform">
      <label>
        <Image src={giticon} alt={'github'} id={'giticon'} />
        Github
      </label>
      <Input type={'text'} id={'gitin'} />
      <label>
        <Image src={linkedicon} alt={'linkedin'} id={'linkedicon'} />
        Linkedin
      </label>
      <Input type={'text'} id={'linkedin'} />
      <label>
        <Image src={codecheficon} alt={'codechef'} id={'codecheficon'} />
        Codechef
      </label>
      <Input type={'text'} id={'codechefin'} />
      <label>
        <Image src={hackericon} alt={'hackerrank'} id={'hackericon'} />
        HackerRank
      </label>
      <Input type={'text'} id={'hackerin'} />
      <label>
        <Image src={twitericon} alt={'twitter'} id={'twitericon'} />
        Twitter
      </label>
      <Input type={'text'} id={'twiterin'} />
      <label>
        <Image src={mediumicon} alt={'medium'} id={'mediumicon'} />
        Medium
      </label>
      <Input type={'text'} id={'mediumin'} />
      <button id={'devformsubmit'} onClick= {() => navigate('/')} >Submit </button>
      <button id={'devformcancel'} onClick = {() => navigate('/form')}> Cancel </button>
    </form>
  );
}

export default Form;