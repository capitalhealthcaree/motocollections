'use client';
const Breadcrumb = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#e8e8e8',
        padding: '60px 0',
        textAlign: 'center',
        marginBottom: '80px'
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          color: '#2c3e50',
          marginBottom: '15px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '-1px'
        }}
      >
        {props.title}      </h1>

      <nav
        style={{
          fontSize: '1.1rem',
          color: '#666666',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <span style={{ color: '#666666' }}>Home</span>
        <span style={{ margin: '0 8px', color: '#666666' }}>»</span>
        <span style={{ color: '#333333', fontWeight: '500' }}>{props.title} </span>
      </nav>
    </div>
  );
}

export default Breadcrumb;