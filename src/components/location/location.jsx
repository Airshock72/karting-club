import React from 'react';
import './location.css';

const Location = () => {
  return (
    <div className="location-image">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Astra Park</h1>
            <h3>თბილისი, ჩაჩავას ქუჩა #8</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="astra 1"
                  width="700"
                  height="215"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=astra%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <h1>Lisi Lemans</h1>
            <h3>თბილისი, ბერიტაშვილის ქუჩა, ლისის ტბის მიმდებარედ</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="lisi lemansi"
                  width="700"
                  height="215"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=lisi%20lemans&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col3">
            <h1>Rustavi International Motorpark</h1>
            <h3>ქვემო ქართლი, რუსთავი, რუსთავის საერთაშორისო კარტოდრომი</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="rustavi"
                  width="700"
                  height="215"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Rustavi%20International%20Motorpark&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <h1>Batumi Karting</h1>
            <h3>ბათუმი, ახალი ბულვარი (6010)</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="batumi"
                  width="700"
                  height="215"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Rustavi%20International%20Motorpark&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
