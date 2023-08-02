import {Link} from 'react-router-dom'
import './index.css'

const Package = () => (
  <div className="about-container">
    <h1 className="heading-1">Maasai Mara</h1>
    <div className="container">
      <p className="days">Day:-1</p>
      <img
        src="https://i.ibb.co/2NN5bQH/img14.jpg"
        className="images-t"
        alt="img11"
      />
      <p className="para-des">
        Our drivers would pick up from the JKIA airport at 7AM. You would board
        our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road
        journey takes about 5 to 6 hours, but you would be amazed by the
        landscape enroute. You would first see the Nairobi national park on your
        left side. On a lucky day, you would also see a White Rhino grazing near
        the fence. Nairobi city has a national park right in its heart!! And it
        is home for Lions, Leopards, White rhinos, gazzelles, Giraffes, crowned
        cranes, and other mammals and birds. This is the only city in the World
        which boasts a National park within the city limits.
      </p>
      <br />
      <img
        src="https://i.ibb.co/bgGzmq6/img22.jpg"
        className="images-t"
        alt="img22"
      />
      <p className="para-des">
        After one hour you would climb up to The Great Rift Valley. This is one
        priced attraction of Kenya. Formed a millions years back, this valley
        boasts beautiful lakes and escarpments, which provide havens for
        plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400
        kilometers), from Jordan in southwestern Asia to the coast of the Indian
        Ocean in central Mozambique. We suggest you request your driver to stop
        when you are on top and enjoy the views of this Nature’s marvel. You
        would reach Maasai Mara by noon. Complete your check in formalities and
        proceed to lunch. After lunch, you would go on your first game drive on
        the great plains of Maasai Mara!!
      </p>
      <img
        src="https://i.ibb.co/4VSpbkS/img25.jpg"
        className="images-t"
        alt="img25"
      />
      <p className="para-des">
        After one hour you would climb up to The Great Rift Valley. This is one
        priced attraction of Kenya. Formed a millions years back, this valley
        boasts beautiful lakes and escarpments, which provide havens for
        plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400
        kilometers), from Jordan in southwestern Asia to the coast of the Indian
        Ocean in central Mozambique. We suggest you request your driver to stop
        when you are on top and enjoy the views of this Nature’s marvel. You
        would reach Maasai Mara by noon. Complete your check in formalities and
        proceed to lunch. After lunch, you would go on your first game drive on
        the great plains of Maasai Mara!!
      </p>
      <p className="days">Day:-2</p>
      <img
        src="https://i.ibb.co/729wHk0/img28.jpg"
        className="images-t"
        alt="img25"
      />
      <p className="para-des">
        - Wake up early. Freshen yourself and head to the restaurant for a hot
        cup of coffee or tea. The mornings are cold at Mara, so do wear your
        fleece jacket for the morning game drive. Breakfast would be packed for
        you. Explore the mornings at Mara. The Sunrise you witness at Mara is
        something which you would never get to witness anywhere in the World.
        Just pray that it does not rain!!
      </p>
      <p className="days">Day:- 3</p>
      <img
        src="https://i.ibb.co/fCMZLJ2/img36.jpg"
        className="images-t"
        alt="img25"
      />
      <p className="para-des">
        Today is a very busy day for you at Mara. Wake up early, freshen
        yourself, have a hot beverage and jump into your designated vehicles.
        Today you would be going towards the border of Maasai Mara. You would be
        going for a full day game drive with packed breakfast and lunch. Sand
        river is the border for Maasai Mara and Tanzania. This has been the
        entry point of the migratory animals for millions of years. You would be
        amazed to see such a small river separates two different countries!!
        Enjoy every bit your time as this is your last day of game drive for
        this trip. Have lunch and take a small nap like our Maasai guides. Then
        proceed towards your camp. On the way back encounter a pride of lion.
        During your stay at Mara, you would have seen the Big 4 our of the Big
        5. The Rhino being very elusive is going to be a difficult find. But
        this area is know for the Rhinos. If you are lucky you would get to see
        one.
      </p>
      <p className="days">Day:- 4</p>
      <img
        src="https://i.ibb.co/7gP6x1G/img39.jpg"
        className="images-t"
        alt="img25"
      />
      <p className="para-des">
        - Wake up at leisure, have a nice and heavy breakfast while you discuss
        about your experience with your group. Board the designated Landcruisers
        to embark on the journey toNairobi. You would be dropped at the JKIA
        airport. End of services. ( B )
      </p>
      <p className="cons">Terms and Conditions:</p>
      <p className="para-des">
        Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle
        for Internal transfers <br /> - Stay at Mara would be at Zebra plains or
        Loyk camp or Julia river camp.
        <br /> - Last day to confirm the tour is August 14th 2023.
        <br /> - Guests travelling should process valid passports with a minimum
        of 6 months validity from the date of return.
        <br /> - Guests traveling should be administered with Yellow fever
        vaccination and Oral polio vaccination. <br />
        The vaccines should be taken at least 15 days prior to travel. <br />
        The certificates has to be shared for us to send you the invite letter
        for VISA application.
        <br /> - Guests should intimate us on any medical ailment and Travel
        Unbounded World Pvt Ltd is not liable for any loss or damage to the
        guests during the tour. <br />- Guests should provide International
        travel insurance 15 days prior to travel. <br />- Guests staying at
        Nairobi one day prior to the travel dates have to reach JKIA airport at
        7AM on Nov 14th <br />- Guests staying at Nairobi on Nov 17th would have
        to arrange their transport from JKIA airport after we drop you.
        <br /> - Lunch on the return on Nov 17th is not a part of the package.{' '}
        <br />- Meals are mentioned in brackets at the end of the Day’s
        itinerary. <br />- Groups above 5 can avail special discounts.
        <br />- Vehicles are provided only for internal transfers and game
        drives, they are not for another purposes or use. <br />- Please refer
        to all the terms and conditions on www.travelunbounded.com
      </p>
    </div>

    <Link to="/book">
      <button type="button" className="button-1">
        Book Now
      </button>
    </Link>
  </div>
)

export default Package
