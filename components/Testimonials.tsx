import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I get relevant commercial briefs with clear scopes, so quoting is fast and accurate. It has helped me win consistent survey work without chasing low-quality leads.",
    name: "Adam Carter",
    title: "Drone Pilot",
    sector: "Construction Surveys",
  },
  {
    quote: "Since joining the platform, I have filled gaps in my schedule with quality roof and inspection jobs. The enquiry details are much better than generic lead forms.",
    name: "Sophie Bennett",
    title: "Drone Pilot",
    sector: "Roof Inspections",
  },
  {
    quote: "HireDronePilot makes it easier to focus on delivery. I can review project briefs quickly, submit competitive quotes, and pick up work in new regions.",
    name: "Daniel Khan",
    title: "Drone Pilot",
    sector: "Mapping & Media",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
            Drone Pilot Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            Why Drone Pilots Rate HireDronePilot 5 Stars
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what drone pilots in our UK
            network say about getting work through the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-300 relative flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-teal-dark fill-teal-dark" />
              </div>

              {/* Rating */}
              <div className="mb-4 pt-2">
                <StarRating />
              </div>

              {/* Quote */}
              <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                  <span className="text-teal font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-teal">{testimonial.name}</p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Sector tag */}
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full font-medium">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
