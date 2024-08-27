import {Hero, PopularProducts, CustomerReviews, SuperQuality, Services, SpecialOffer, Suscribe, Footer} from './sections';

const App = () => (
  <main className="relative">
    <h1>FUNCIONA Hss</h1>
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
    </section>
    <section className="padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
  </main>
);

export default App;