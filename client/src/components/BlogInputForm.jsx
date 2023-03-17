import '../styles/BlogInputForm.css';

export default function BlogInputForm() {
  return (
    <div className='BlogInputForm'>
      <div className='blog__title'>
        <input type='text' placeholder='Blog Title...' />
      </div>
      <div className='blog__category'>
        <p>Category: </p>
        <select name='' id=''>
          <option value='JavaScript'>JavaScript</option>
          <option value='web3'>web3</option>
          <option value='ReactJS'>ReactJS</option>
        </select>
      </div>
      <div className='blog__description'>
        <textarea
          className='blog__paragraph'
          rows='10'
          placeholder='Blog Paragraph...'
        ></textarea>
      </div>
      <div className='blog__action'>
        <button className='post'>POST</button>
      </div>
    </div>
  );
}
