import React from "react";
import { Link, useParams } from "react-router-dom";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import bg1 from "../assets/blogs/bg1.jpg";
import bg2 from "../assets/blogs/bg2.jpg";
import bg3 from "../assets/blogs/bg3.jpg";
import bg4 from "../assets/blogs/bg4.jpg";
import bg5 from "../assets/blogs/bg5.jpg";
import bg6 from "../assets/blogs/bg6.png";

const BlogsDetail = () => {
  const url = useParams();
  // console.log(url.id);
  return (
    <div>
      <PageLayOut />
      {/* Blog */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        {url.id == 1 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              The Environmental Impact of Throwing Down Scrap
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg1}
                alt="Environment Impact"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Explore the environmental consequences of discarding scrap
                particulars rather of recycling or dealing them. Punctuate the
                benefits of recycling and how it reduces tip waste and
                pollution.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                In moment's fast-paced world, numerous of us are ashamed of
                discarding old particulars without an alternate study. Whether
                it's an outdated laptop, a broken appliance, or worn-out
                cabinetwork, these particulars frequently end up in tips. This
                not only contributes to the growing problem of waste operation
                but also has severe environmental impacts.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                When scrap particulars are thrown down, they contribute to the
                ever-growing tips, which emit dangerous hothouse feasts like
                methane as they putrefy. These feasts are significant
                contributors to global warming and climate change. Also,
                numerous scrap particulars, especially electronics, contain
                dangerous accoutrements similar as lead, mercury, and cadmium.
                When these accoutrements strain into the soil and water, they
                can beget severe environmental impurity, affecting wildlife and
                mortal health.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling or dealing scrap particulars offers a sustainable
                volition. By recycling, we conserve natural coffers, reduce
                energy consumption, and minimize pollution. For case, recovering
                aluminum saves 95% of the energy needed to produce new aluminum
                from raw accoutrements. By choosing to reclaim or vend your
                scrap, you are contributing to a healthier earth.
              </p>
            </div>
          </article>
        ) : url.id == 2 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              How to Turn Your Scrap into Cash
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg2}
                alt="Turn Scrap into Cash"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Turning your unwanted scrap into cash is easier than you might
                suppose. With platforms like "Scrap Yard," you can snappily
                transfigure clutter into cash. Here's a step-by-step companion
                to help you get started.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Step 1: Identify Valuable Scrap
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Start by identifying items in your home or business that are no
                longer in use. Look for metals like aluminum, copper, and steel,
                as well as electronics, old appliances, and even car parts.
                These items often have significant value.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Step 2: Prepare Your Scrap for Sale
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Clean and sort your scrap items to get the best price. Remove
                any non-metal parts from metal items, and make sure electronics
                are free of personal data. Properly sorting and cleaning your
                scrap can significantly increase its value.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Step 3: Set a Competitive Price
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Research current market prices for different types of scrap.
                This will give you an idea of how much you can expect to earn.
                Be sure to price your items competitively to attract buyers.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Step 4: List Your Items on "Scrap Yard"
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Create an account on "Scrap Yard" and start listing your items.
                Be sure to include clear photos and detailed descriptions to
                attract buyers.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Step 5: Complete the Sale
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Once a buyer is interested, arrange for the sale and delivery of
                the items. Make sure to follow safe transaction practices to
                ensure a smooth and secure process.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Conclusion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                By following these steps, you can easily turn your unwanted
                scrap into a valuable source of income.
              </p>
            </div>
          </article>
        ) : url.id == 3 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Common Household Items You Didn’t Know You Could Sell as Scrap
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg3}
                alt="Household Scrap Items"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Did you know that many common household items can be sold as
                scrap? Instead of throwing them away, you can declutter your
                home and earn some extra cash. Here are some everyday items you
                might not realize have value as scrap.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                1. Old Electronics
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Laptops, smartphones, and other electronic devices contain
                valuable metals like gold, silver, and copper. Even if they no
                longer work, their components can be recycled.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                2. Broken Appliances
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Items like microwaves, refrigerators, and washing machines are
                often full of valuable metals. Instead of sending them to the
                landfill, sell them as scrap.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                3. Copper Pipes and Wiring
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Old plumbing and electrical wiring are typically made of copper,
                which is highly valuable. Even small amounts can add up.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                4. Aluminum Cans
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Save your beverage cans! Aluminum is one of the most recycled
                materials, and you can earn money by selling your collection.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                5. Brass Fixtures
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Old brass doorknobs, light fixtures, and plumbing fixtures are
                often overlooked. Brass is a valuable scrap metal that can bring
                in a decent amount of cash.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                6. Car Parts
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                If you have an old car sitting around, consider selling its
                parts as scrap. Batteries, radiators, and catalytic converters
                are especially valuable.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                7. Stainless Steel Utensils
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Broken or unused stainless steel kitchen utensils can also be
                sold as scrap. Stainless steel is in high demand for recycling.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Conclusion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                By following these steps, you can easily turn your unwanted
                scrap into a valuable source of income.
              </p>
            </div>
          </article>
        ) : url.id == 4 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              The Future of Recycling: Innovations in the Scrap Industry
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg4}
                alt="Future of Recycling"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The recycling and scrap industry is evolving rapidly, thanks to
                innovative technologies and methods that are making the process
                more efficient and environmentally friendly. Here are some of
                the most exciting trends and innovations shaping the future of
                recycling.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                1. Advanced Sorting Technologies
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Modern recycling facilities are now equipped with advanced
                sorting technologies such as AI-powered robots and optical
                sorters. These technologies can accurately separate different
                types of materials, increasing the efficiency and purity of the
                recycled products.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                2. Chemical Recycling
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Unlike traditional mechanical recycling, chemical recycling
                breaks down plastics into their basic chemical components. This
                allows for the recycling of materials that were previously
                difficult or impossible to recycle, such as mixed or
                contaminated plastics.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                3. Blockchain for Recycling
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Blockchain technology is being used to improve transparency and
                traceability in the recycling supply chain. This ensures that
                recyclable materials are properly tracked and processed,
                reducing fraud and improving the overall efficiency of the
                recycling process.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                4. Circular Economy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The circular economy model focuses on designing products and
                processes that minimize waste and keep materials in use for as
                long as possible. Companies are increasingly adopting this
                model, designing products that are easier to recycle and
                creating systems for product take-back and recycling.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                5. Urban Mining
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Urban mining involves extracting valuable metals and materials
                from electronic waste and other urban sources. This approach
                reduces the need for traditional mining, which is often
                environmentally damaging, and recovers valuable resources from
                discarded items.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                6. Renewable Energy in Recycling
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling facilities are increasingly using renewable energy
                sources such as solar and wind power. This reduces the carbon
                footprint of the recycling process and makes it more
                sustainable.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Conclusion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                These innovations are making recycling more efficient,
                cost-effective, and environmentally friendly. As technology
                continues to advance, the recycling and scrap industry will play
                a crucial role in creating a sustainable future.
              </p>
            </div>
          </article>
        ) : url.id == 5 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Success Stories: How People Have Benefited from Selling Scrap
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg5}
                alt="Success Stories"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Selling scrap items can be a surprisingly lucrative venture.
                Here are some inspiring success stories of individuals who have
                turned their unwanted items into significant profits.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                1. John’s Junkyard
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                John, a retired engineer, started collecting scrap metal from
                his neighborhood. What began as a hobby quickly turned into a
                profitable business. “I never thought that old appliances and
                metal scraps could bring in so much money,” John says. “Now, I
                have a steady stream of income and have even hired a few helpers
                to expand my operations.”
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                2. Sarah’s Eco-Friendly Initiative
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Sarah, a college student, was passionate about environmental
                sustainability. She started by collecting e-waste from her
                campus and nearby communities. “I saw so much electronic waste
                being thrown away, and I knew I had to do something,” Sarah
                explains. By partnering with local recycling centers, Sarah was
                able to earn money and make a positive impact on the
                environment.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                3. Mike’s Auto Parts Venture
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Mike, a car enthusiast, realized the potential in selling used
                car parts. He started by dismantling old cars and selling the
                parts as scrap. “It’s incredible how much value is in a single
                old car,” Mike shares. “I’ve made thousands of dollars from
                parts that would have otherwise been junked.”
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                4. Emma’s Creative Repurposing
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Emma, an artist, began using scrap materials for her art
                projects. She started selling her creations online and at local
                markets. “I never imagined that my art, made from recycled
                materials, would be so popular,” Emma says. “I’m not only
                earning money but also promoting recycling through my work.”
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Conclusion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                These stories show that with a bit of creativity and effort,
                selling scrap can be a profitable and rewarding endeavor.
                Whether you’re looking to earn extra income or start a
                full-fledged business, there’s potential in the scrap you might
                otherwise discard.
              </p>
            </div>
          </article>
        ) : url.id == 6 ? (
          <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              The Importance of Recycling: How Every Small Effort Counts
            </h2>
            <div className="mb-6">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={bg6}
                alt="Importance of Recycling"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling is more than just a buzzword; it’s a critical practice
                for preserving our planet. Every small effort counts, and here’s
                why recycling should be an integral part of your daily routine.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                1. Conservation of Natural Resources
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling helps conserve natural resources like minerals, water,
                and timber. By reusing materials, we reduce the need for new raw
                materials, which often involves environmentally destructive
                extraction processes.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                2. Energy Savings
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling requires significantly less energy than producing new
                products from raw materials. For instance, recycling aluminum
                saves up to 95% of the energy needed to create new aluminum from
                bauxite ore. These energy savings translate into reduced
                greenhouse gas emissions.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                3. Reducing Landfill Waste
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Landfills are overflowing with waste, much of which could be
                recycled. By recycling, we reduce the volume of waste sent to
                landfills, extending their lifespan and minimizing environmental
                pollution.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                4. Mitigating Climate Change
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling reduces greenhouse gas emissions associated with waste
                decomposition in landfills and the production of new materials.
                Every small effort to recycle helps combat climate change and
                protect our planet for future generations.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                5. Economic Benefits
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Recycling creates jobs and stimulates economic growth. From
                collection and processing to manufacturing and retail, the
                recycling industry supports a wide range of employment
                opportunities.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                6. Personal Responsibility
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Adopting recycling practices is a way to take personal
                responsibility for the waste we generate. It encourages
                mindfulness about consumption and waste, promoting a more
                sustainable lifestyle.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Conclusion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Every small effort you make to recycle contributes to a larger
                environmental impact. Start by sorting your waste, using
                recycling bins, and educating others about the importance of
                recycling. Together, we can make a significant difference.
              </p>
            </div>
          </article>
        ) : (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              No Such Blog Exists
            </h2>
            <Link
              to="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Go to Home
            </Link>
          </div>
        )}
        <div className="text-center mt-8">
          <Link
            to="/blogs"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetail;
