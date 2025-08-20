'use client'
const CustomGearSection = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-6 pe-5">
          <h1
            style={{
              color: '#2c3e50',
              fontFamily: 'Arial, sans-serif',
              fontSize: '4rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '30px',
              letterSpacing: '-1px'
            }}
          >
            Order Custom Designed Gear
          </h1>

          <p
            style={{
              color: '#666666',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '40px',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Create a unique, personalized leather product with Moto Collection. Whether it's a custom jacket, cosplay outfit, or motorbike gear, we craft each piece to your exact specifications. Contact us to bring your design to life!
          </p>

          <button
            style={{
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '0.95rem',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Arial, sans-serif'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#34495e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#2c3e50';
            }}
          >
            CREATE DESIGN
          </button>
        </div>

        {/* Right Video/Image */}
        <div className="col-6 ps-4">
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              position: 'relative'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              <source src="images/moto-vid.mp4" type="video/mp4" />
              <source src="images/moto-vid.mp4" type="video/webm" />

              {/* Fallback image that matches your reference */}
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iYmciIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjcwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0YTU1NjgiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMmQzNzQ4Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8IS0tIEJhY2tncm91bmQgLS0+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiZykiLz4KICA8IS0tIFllbGxvdyBsZWF0aGVyIHBhbmVsIC0tPgogIDxwYXRoIGQ9Ik0gMTAwIDEwMCBRIDQwMCA1MCA3MDAgMTUwIEwgNzAwIDM1MCBRIDM1MCA0MDAgMTAwIDMwMCBaIiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjkiLz4KICA8IS0tIFJlZCBsZWF0aGVyIHBhbmVsIC0tPgogIDxwYXRoIGQ9Ik0gMjAwIDUwIEwgNjAwIDEwMCBMIDUwMCAzMDAgTCAxNTAgMjUwIFoiIGZpbGw9IiNkYzI2MjYiIG9wYWNpdHk9IjAuOCIvPgogIDwhLS0gQmx1ZSBsZWF0aGVyIHBhbmVsIC0tPgogIDxwYXRoIGQ9Ik0gNDAwIDUwIEwgNzUwIDEwMCBMIDY1MCAzNTAgTCAzNTAgMzAwIFoiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuNyIvPgogIDwhLS0gUHVycGxlIGxlYXRoZXIgcGFuZWwgLS0+CiAgPHBhdGggZD0iTSA1MCAyMDAgTCA0MDAgMTUwIEwgMzUwIDM1MCBMIDA1MCA0MDAiIGZpbGw9IiM4YjVjZjYiIG9wYWNpdHk9IjAuNiIvPgogIDwhLS0gTGVhdGhlciB0ZXh0dXJlIGxpbmVzIC0tPgogIDxsaW5lIHgxPSIxNTAiIHkxPSIxMDAiIHgyPSI2NTAiIHkyPSIxNTAiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjciLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMjAwIiB4Mj0iNzAwIiB5Mj0iMjUwIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC43Ii8+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjMwMCIgeDI9IjYwMCIgeTI9IjM1MCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K"
                alt="Colorful Custom Leather Gear"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGearSection;