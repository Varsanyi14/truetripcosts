// When each country tends to be busy and pricey, and when it tends to be cheaper
// and quieter. TTC Desk research compilation, checked Jul 2026.
// IMPORTANT: there are no numbers in this file, and that is deliberate. A single
// figure for what a country costs in a given month does not exist as a sourceable
// fact: real fares and room rates move with the city, the route, the hotel tier,
// the booking window and the year. So nothing here is a price, a percentage or a
// modelled swing. What is here instead is only the part that is genuinely knowable:
// peak, shoulder and off as categorical tiers, named holidays, festivals and events
// that drive demand, and factual weather seasons (monsoons, dry seasons, the
// Atlantic hurricane season). Sourcing is uneven and is rated per row. A high rating
// means the pattern is well documented and widely agreed; medium means the seasons
// are clear but the money side is partly inference; low means we are telling you
// the pattern is not documented well enough to state plainly. Where a country runs
// on two clocks (Sri Lanka's two monsoons, Thailand's two coasts, the southern
// hemisphere's reversed year) the row says so rather than averaging it into one
// misleading season. Read the confidence field before planning around a row.

// THE months FIELD adds nothing new. It restates each row's own peak/shoulder/off
// prose as twelve values, Jan to Dec, so the page can colour a calendar strip. It is
// a reformatting of facts already above it, never a new claim, and it carries no
// figures. The rules used, so any row can be audited against its own prose:
//   1. A month named in exactly one of peak, shoulder or off takes that tier. Ranges
//      fill inclusively and wrap across the year end, so "Nov to Mar" covers Dec.
//   2. A month named in more than one of the three is neutral (shoulder). Ambiguity
//      is never resolved into a stronger claim.
//   3. A month named in none of them is neutral. It is never guessed into peak or off.
//   4. Fixed-date holidays map to their month (Christmas and New Year to Dec). Movable
//      ones (Easter, Holy Week, Carnival, Lunar New Year, Songkran, Ramadan, Chuseok)
//      map to nothing, because their month changes by year, so a driver lasting a week
//      never colours a whole month on its own.
//   5. Where a row carves a month out of its quiet or cheap window ("outside
//      Christmas"), that month is never coloured as cheaper and quieter.
//   6. A month the row itself lists among its costliest weeks is never coloured as
//      cheaper and quieter either, so the strip cannot contradict the row's own text.
//   7. Where a row states two regional patterns, the strip follows the dominant one
//      and the note carries the rest. Rules 2 and 3 mean several countries come out
//      largely neutral, which is the honest result rather than a gap to be filled.

export const seasonsChecked = '2026-07-31';

export const seasons = [
  {
    country: "Argentina", slug: "argentina", hasGuide: true, region: "Americas",
    peak: "Dec to Feb, the southern summer",
    shoulder: "Oct to Nov, Mar to Apr",
    off: "May to Sep, outside the ski weeks",
    months: ["peak","peak","shoulder","shoulder","off","off","shoulder","off","off","shoulder","shoulder","peak"],
    peakDriver: "Southern summer, the Patagonia trekking season, Argentine school holidays in Jan, and ski season in Jul and Aug around Bariloche and Mendoza",
    weatherNote: "Buenos Aires is hot and humid in Jan and Feb; Patagonia is windy in summer and much of it winds down in winter, with reduced services",
    cheapestWindow: "Late Apr to Jun, and Sep, in the cities",
    avoidIfBudget: "Jan in Patagonia, Christmas and New Year, the Jul school holidays",
    confidence: "high",
    note: "Two countries by season. Patagonia realistically works Nov to Mar and quiets down hard outside it, while Buenos Aires empties in Jan as locals leave and can be easier then. The Oct to Nov and Mar to Apr shoulders give most of the summer access with fewer people. No figure is quoted because fares and rooms vary far too much by route and city."
  },
  {
    country: "Aruba", slug: "aruba", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to mid-Apr",
    shoulder: "Late Apr to Jun",
    off: "Sep to Oct",
    months: ["peak","peak","peak","shoulder","shoulder","shoulder","shoulder","shoulder","off","off","shoulder","peak"],
    peakDriver: "North Americans escaping winter, Christmas and New Year, US spring break in Mar, and Carnival season through Jan and Feb",
    weatherNote: "Dry and windy most of the year, and the island sits south of the main Caribbean hurricane belt, so storm risk is lower than the northern islands rather than absent",
    cheapestWindow: "Sep to Oct, the quietest stretch",
    avoidIfBudget: "Christmas and New Year, Feb and Mar",
    confidence: "high",
    note: "The shape here is demand, not weather. The island is dry all year, so the swing comes from North American winter travel rather than from anything happening on the ground. Late Apr to Jun keeps the weather and loses much of the crowd."
  },
  {
    country: "Australia", slug: "australia", hasGuide: true, region: "Oceania",
    peak: "Dec to Jan in the south, Jun to Sep in the tropical north",
    shoulder: "Feb to Apr, Oct to Nov",
    off: "May to Aug in the southern cities",
    months: ["peak","shoulder","shoulder","shoulder","off","off","shoulder","shoulder","peak","shoulder","shoulder","peak"],
    peakDriver: "Christmas and the Australian summer school holidays, Easter, and the northern dry season for the reef and the Top End",
    weatherNote: "Seasons are reversed. Cairns and Darwin have a wet season roughly Nov to Apr, and marine stingers make many tropical beaches unswimmable then",
    cheapestWindow: "May to early Jun and late Oct in the south",
    avoidIfBudget: "Christmas through late Jan, Easter week, and school holiday weeks",
    confidence: "high",
    note: "The country splits in two. Sydney and Melbourne peak in the southern summer, while Cairns, the reef and the Northern Territory peak in the middle of the year when the north is dry. Whichever half you want, the weeks around Christmas are the ones to move away from."
  },
  {
    country: "Austria", slug: "austria", hasGuide: true, region: "Europe",
    peak: "Jul to Aug, and Dec to Mar in the ski regions",
    shoulder: "May to Jun, Sep to Oct",
    off: "Late Apr to early May, and Nov",
    months: ["peak","peak","peak","off","shoulder","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "Alpine hiking season, the ski season, Christmas markets through Dec, and the Vienna concert and New Year calendar",
    weatherNote: "Mountain weather. High passes, lifts and many mountain hotels close between the summer and winter seasons",
    cheapestWindow: "Nov, and the weeks after the lifts shut in spring",
    avoidIfBudget: "Christmas and New Year, the Feb school holiday weeks, mid-Aug",
    confidence: "high",
    note: "Two peaks with real gaps between them. In Nov and late Apr a lot of mountain infrastructure simply closes, which is why those weeks are quiet and cheap, and also why they can disappoint if a specific cable car was the plan. Vienna and Salzburg follow a city rhythm instead."
  },
  {
    country: "Bahamas", slug: "bahamas", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to Apr",
    shoulder: "May to Jun, Nov to mid-Dec",
    off: "Aug to Oct",
    months: ["peak","peak","peak","peak","shoulder","shoulder","shoulder","off","off","off","shoulder","peak"],
    peakDriver: "North Americans escaping winter, Christmas and New Year, Junkanoo at Christmas and New Year, and US spring break in Mar",
    weatherNote: "The Atlantic hurricane season runs Jun to Nov, with the highest risk Aug to Oct",
    cheapestWindow: "Sep to Oct, the deepest part of the storm season",
    avoidIfBudget: "Christmas and New Year, and Mar",
    confidence: "high",
    note: "Cheapest and riskiest are the same weeks, and that is the whole trade. If you take the Sep to Oct window, book refundable and watch the forecast. Nov and early Dec are the quieter compromise, past most of the risk and before winter rates land."
  },
  {
    country: "Brazil", slug: "brazil", hasGuide: true, region: "Americas",
    peak: "Dec to Mar, with Carnival the sharpest spike",
    shoulder: "Apr to May, Sep to Nov",
    off: "Jun to Aug in the coastal cities",
    months: ["peak","peak","peak","shoulder","shoulder","off","off","off","shoulder","shoulder","shoulder","peak"],
    peakDriver: "Carnival, whose date moves with Easter and lands in Feb or Mar, the southern summer, Brazilian school holidays in Jan and Jul, and New Year in Rio",
    weatherNote: "Rio and the southeast are hot and wet in the southern summer, while the Amazon and the Pantanal are drier and better for wildlife roughly Jun to Oct",
    cheapestWindow: "Late Apr to Jun, and Sep, on the coast",
    avoidIfBudget: "Carnival week, New Year in Rio, and Jan",
    confidence: "high",
    note: "Carnival moves with Easter, so check the date for your travel year before booking anything near it. The Amazon and the Pantanal run on the opposite clock to the beaches, which means the coast's quiet season is the wildlife season."
  },
  {
    country: "Cambodia", slug: "cambodia", hasGuide: true, region: "Asia",
    peak: "Nov to Feb",
    shoulder: "Mar, Oct",
    off: "May to Sep, the wet season",
    months: ["peak","peak","shoulder","shoulder","off","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "The cool dry season, Christmas and New Year, Chinese New Year in late Jan or Feb, and Khmer New Year in mid-Apr",
    weatherNote: "Hot and humid Mar to May. The southwest monsoon runs roughly Jun to Oct and usually brings heavy afternoon bursts rather than all-day rain",
    cheapestWindow: "May to Sep",
    avoidIfBudget: "Christmas and New Year, and Chinese New Year",
    confidence: "high",
    note: "Angkor in the wet season is green, quieter and cheaper, and the rain tends to arrive in the afternoon. The trade is heat and mud, not a washout."
  },
  {
    country: "Canada", slug: "canada", hasGuide: true, region: "Americas",
    peak: "Jun to Aug, and Dec to Mar in the ski regions",
    shoulder: "May, Sep to Oct",
    off: "Nov, and Apr",
    months: ["peak","peak","peak","off","shoulder","peak","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "Summer school holidays, the Rockies and national park season, autumn colour in Quebec and Ontario from late Sep, and the ski season",
    weatherNote: "Long cold winters. Some park roads, lodges and seasonal services only operate in the summer months",
    cheapestWindow: "Nov and Apr, the gaps between the two seasons",
    avoidIfBudget: "Jul and Aug in Banff and Jasper, Christmas week, and autumn colour weekends",
    confidence: "high",
    note: "The mountain west and the eastern cities move together in summer and apart in winter. Nov and Apr are cheap for an honest reason: it is between seasons and a fair amount is shut."
  },
  {
    country: "China", slug: "china", hasGuide: true, region: "Asia",
    peak: "Apr to May and Sep to Oct, plus the national holiday weeks",
    shoulder: "Mar, Jun, Nov",
    off: "Dec to Feb, outside the New Year period",
    months: ["off","off","shoulder","peak","peak","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder"],
    peakDriver: "The National Day holiday in early Oct, the Labour Day holiday in early May, Chinese New Year in late Jan or Feb, and mild spring and autumn weather",
    weatherNote: "Hot humid summers in the south and east, cold dry winters in the north",
    cheapestWindow: "Late Nov to early Dec, and the weeks after the New Year rush",
    avoidIfBudget: "The national holiday weeks and the Chinese New Year travel period",
    confidence: "high",
    note: "The holiday weeks are the thing to plan around. Domestic travel moves at a scale that fills trains, flights and sites regardless of what foreign visitors do. Spring and autumn have the best weather, and they are priced for it."
  },
  {
    country: "Colombia", slug: "colombia", hasGuide: true, region: "Americas",
    peak: "Dec to mid-Jan, plus Holy Week in Mar or Apr",
    shoulder: "Feb to Mar, Jul to Aug",
    off: "May to Jun, Sep to Nov",
    months: ["peak","shoulder","shoulder","shoulder","off","off","shoulder","shoulder","off","off","off","peak"],
    peakDriver: "Colombian holidays and school breaks, Holy Week, Barranquilla's Carnival in Feb or Mar, and Medellin's flower fair in Aug",
    weatherNote: "Close to the equator, so altitude sets the temperature rather than the month. The drier stretches run roughly Dec to Mar and Jul to Aug",
    cheapestWindow: "May to Jun, and Sep to Nov",
    avoidIfBudget: "Christmas to mid-Jan, Holy Week, and festival weeks in the host city",
    confidence: "medium",
    note: "There is no summer or winter here, only wetter and drier stretches, and demand follows Colombian holidays more closely than weather. Festival spikes are local: they hit the host city and leave the rest of the country alone."
  },
  {
    country: "Costa Rica", slug: "costa-rica", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to Apr, the dry season",
    shoulder: "May to Jun, Nov",
    off: "Sep to Oct",
    months: ["peak","peak","peak","peak","shoulder","shoulder","shoulder","shoulder","off","off","shoulder","peak"],
    peakDriver: "The dry season, Christmas and New Year, Holy Week, and US spring break in Mar",
    weatherNote: "The green season runs roughly May to Nov with afternoon rain. Sep and Oct are wettest on the Pacific side, while the Caribbean coast is often drier then",
    cheapestWindow: "Sep to Oct, and the green season shoulder in May to Jun",
    avoidIfBudget: "Christmas and New Year, Holy Week, and Mar",
    confidence: "high",
    note: "The green season is the honest value window: mornings are often clear and the rain arrives later in the day. The two coasts run on different clocks, so the Pacific's wettest weeks can be the Caribbean's best."
  },
  {
    country: "Croatia", slug: "croatia", hasGuide: true, region: "Europe",
    peak: "Jul to Aug",
    shoulder: "May to Jun, Sep",
    off: "Nov to Mar",
    months: ["off","off","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","off"],
    peakDriver: "European school holidays, the Adriatic beach season, cruise calls in Dubrovnik and Split, and Aug being the busiest travel month in Europe",
    weatherNote: "Hot dry summers. Coastal winters are mild but wet, ferry schedules thin out, and many island places close",
    cheapestWindow: "Late Apr to May, and Oct",
    avoidIfBudget: "Aug, and Dubrovnik and Hvar in particular",
    confidence: "high",
    note: "One of the sharpest peaks in Europe: in Aug the coast is full, and in Jan a good deal of it is shut. The sojourn tax is also set at its top rate on the coast in the summer band, so the season shows up on the bill as well as in the room rate. May, Jun and Sep are the value months."
  },
  {
    country: "Czechia", slug: "czechia", hasGuide: true, region: "Europe",
    peak: "May to Sep, plus the Christmas market weeks",
    shoulder: "Apr, Oct",
    off: "Jan to Mar, and Nov",
    months: ["off","off","off","shoulder","peak","peak","peak","peak","peak","shoulder","off","peak"],
    peakDriver: "The summer city break season, Prague's Christmas markets from late Nov, the Easter markets, and New Year",
    weatherNote: "Cold grey winters with short days. Warm summers, and old town streets to match",
    cheapestWindow: "Jan to Mar, outside the New Year week",
    avoidIfBudget: "New Year in Prague, the Dec market weeks, and Jun to Aug",
    confidence: "high",
    note: "Prague sets the pattern and it is a city rhythm rather than a weather one. Late winter is genuinely quiet and the sights are unchanged, so you are trading daylight and warmth rather than access."
  },
  {
    country: "Denmark", slug: "denmark", hasGuide: true, region: "Europe",
    peak: "Jun to Aug",
    shoulder: "May, Sep",
    off: "Nov to Mar",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "Long Nordic summer days, Danish holidays in Jul, Copenhagen's outdoor season, and the Christmas weeks at Tivoli",
    weatherNote: "Cool wet winters with short days. Summer is mild rather than hot",
    cheapestWindow: "Jan to Mar",
    avoidIfBudget: "Jul, and the Dec Christmas weeks in Copenhagen",
    confidence: "medium",
    note: "The summer premium is about daylight and outdoor life, which is exactly what visitors come for. Winter is quieter and Copenhagen still works indoors, so this is a real trade rather than a compromise."
  },
  {
    country: "Dominican Republic", slug: "dominican-republic", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to Apr",
    shoulder: "May to Jun, Nov",
    off: "Aug to Oct",
    months: ["peak","peak","peak","peak","shoulder","shoulder","shoulder","off","off","off","shoulder","peak"],
    peakDriver: "North Americans escaping winter, Christmas and New Year, US spring break, and Holy Week, which is a major domestic travel week",
    weatherNote: "The Atlantic hurricane season runs Jun to Nov, with the highest risk Aug to Oct",
    cheapestWindow: "Sep to Oct",
    avoidIfBudget: "Christmas and New Year, Mar, and Holy Week",
    confidence: "high",
    note: "Resort pricing swings with North American winter demand rather than with local weather. Holy Week is the one peak driven from inside the country, and it fills beaches even when foreign demand is quiet."
  },
  {
    country: "Ecuador", slug: "ecuador", hasGuide: true, region: "Americas",
    peak: "Jun to Aug, and mid-Dec to mid-Jan",
    shoulder: "Feb to May, Sep to Nov",
    off: "Feb to Apr in the highlands",
    months: ["peak","off","off","off","shoulder","peak","peak","peak","shoulder","shoulder","shoulder","peak"],
    peakDriver: "North American and European summer holidays, Christmas and New Year, and Galapagos cruise demand",
    weatherNote: "The highlands are drier roughly Jun to Sep. The Galapagos has a warm wetter season Dec to May and a cooler drier season Jun to Nov, and both are good for wildlife",
    cheapestWindow: "Feb to Apr, and Sep to Nov",
    avoidIfBudget: "Jul and Aug, Christmas and New Year",
    confidence: "medium",
    note: "The Galapagos has no bad season, only different ones, so the swing there is cruise demand rather than weather. On the mainland the seasons show up as rain rather than temperature, because altitude does the work a calendar would do elsewhere."
  },
  {
    country: "Egypt", slug: "egypt", hasGuide: true, region: "Middle East",
    peak: "Oct to Apr",
    shoulder: "May, Sep",
    off: "Jun to Aug",
    months: ["peak","peak","peak","peak","shoulder","off","off","off","shoulder","peak","peak","peak"],
    peakDriver: "Cool sightseeing weather, Christmas and New Year, Western school holidays, and Red Sea resort demand",
    weatherNote: "Luxor and Aswan are extremely hot Jun to Aug. The Red Sea coast stays usable through summer",
    cheapestWindow: "Jun to Aug, if you can take the heat",
    avoidIfBudget: "Christmas and New Year, and Feb to Mar",
    confidence: "high",
    note: "One of the clearest patterns anywhere: the reason to come is outdoors, midsummer makes it punishing, and demand follows the temperature. Ramadan and Eid shift earlier each year against the Western calendar, so check the dates for your travel year; they change opening hours more than they change prices."
  },
  {
    country: "El Salvador", slug: "el-salvador", hasGuide: true, region: "Americas",
    peak: "Nov to Apr, the dry season, plus Holy Week",
    shoulder: "May, Oct",
    off: "Jun to Sep",
    months: ["peak","peak","peak","peak","shoulder","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "The dry season, Holy Week, Christmas and New Year, and the Pacific surf calendar",
    weatherNote: "The wet season runs roughly May to Oct, usually as afternoon rain, and the biggest Pacific swell arrives in those same wetter months",
    cheapestWindow: "Jun to Sep",
    avoidIfBudget: "Holy Week, Christmas and New Year",
    confidence: "low",
    note: "The weather season is clear, the price season is not. Tourism here is young and the demand pattern is not documented well enough for us to state it plainly, so treat the dry and wet windows as reliable and the money side as a light inference."
  },
  {
    country: "France", slug: "france", hasGuide: true, region: "Europe",
    peak: "Jul to Aug, and the Feb ski weeks",
    shoulder: "May to Jun, Sep to Oct",
    off: "Nov to Mar, outside ski areas and the Christmas weeks",
    months: ["off","shoulder","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "French school holidays in Jul and Aug, the Mediterranean coast season, Alpine ski weeks in Feb, and the Alsace Christmas markets",
    weatherNote: "Hot summers in the south. Paris is mild and grey through winter",
    cheapestWindow: "Late Jan to Mar in the cities, and Nov",
    avoidIfBudget: "Aug on the Riviera, the Feb school holiday weeks in the Alps, Christmas and New Year",
    confidence: "high",
    note: "Paris and the coast pull in opposite directions in Aug: the city thins out as locals leave while the south fills up. Sep is the quiet favourite, with warm water and fewer people. Event weeks such as a film festival or a major race spike one city and leave the rest of the country untouched."
  },
  {
    country: "Georgia", slug: "georgia", hasGuide: true, region: "Europe",
    peak: "Jul to Aug, and Dec to Mar in the ski resorts",
    shoulder: "May to Jun, Sep to Oct",
    off: "Nov, and Apr",
    months: ["peak","peak","peak","off","shoulder","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "The Black Sea coast season, mountain hiking, the Gudauri ski season, and the Kakheti wine harvest in Sep",
    weatherNote: "Batumi is humid in summer. Mountain roads to Tusheti and Svaneti are seasonal and can be closed by snow well into spring",
    cheapestWindow: "Nov, and Apr",
    avoidIfBudget: "Aug in Batumi, and New Year in Tbilisi",
    confidence: "medium",
    note: "Tbilisi is a year-round city and inexpensive by European standards in any month, so the seasonality lives in the coast and the mountains rather than the capital. Sep is the quietly good one: harvest season, warm days, roads still open."
  },
  {
    country: "Germany", slug: "germany", hasGuide: true, region: "Europe",
    peak: "Jun to Aug, plus Oktoberfest and the Christmas market weeks",
    shoulder: "May, Sep, and Oct outside Munich",
    off: "Jan to Feb, and Nov",
    months: ["off","off","shoulder","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "Summer holidays, Oktoberfest in Munich from late Sep to early Oct, Christmas markets from late Nov, and the big trade fairs, which fill one city at a time",
    weatherNote: "Cold grey winters. Warm summers with long light evenings",
    cheapestWindow: "Jan to Feb, and Nov before the markets open",
    avoidIfBudget: "Oktoberfest in Munich, the Dec market weeks, and any trade fair week in the host city",
    confidence: "high",
    note: "Two of Germany's spikes are strictly local. Oktoberfest absorbs Munich's hotel supply and does nothing to Hamburg, and a trade fair does the same to Frankfurt, Hannover or Berlin for a few days. Checking whether your dates land on one is worth more than picking a season."
  },
  {
    country: "Greece", slug: "greece", hasGuide: true, region: "Europe",
    peak: "Jul to Aug",
    shoulder: "May to Jun, Sep to mid-Oct",
    off: "Nov to Mar",
    months: ["off","off","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","off"],
    peakDriver: "European school holidays, the island beach season, the mid-Aug Assumption holiday, which is a major domestic travel week, and Orthodox Easter, whose date differs from the Western one",
    weatherNote: "Hot dry summers with strong meltemi winds in the Aegean. Winter closes many island hotels and restaurants and thins some ferry routes",
    cheapestWindow: "Late Apr to May, and Oct",
    avoidIfBudget: "Aug, and the mid-Aug holiday week above all",
    confidence: "high",
    note: "The islands run on a season rather than a calendar: outside roughly Apr to Oct many of them shut, so the cheapest months can also be the ones where the place you wanted is closed. Greece sets its accommodation levy higher in the spring to autumn band too, so the season shows up on the bill as well."
  },
  {
    country: "Hong Kong", slug: "hong-kong", hasGuide: true, region: "Asia",
    peak: "Oct to Dec, plus Chinese New Year",
    shoulder: "Mar to Apr, Jun",
    off: "Jul to Sep",
    months: ["shoulder","shoulder","shoulder","shoulder","shoulder","shoulder","off","off","off","peak","peak","peak"],
    peakDriver: "Dry mild autumn weather, Chinese New Year in late Jan or Feb, and the convention and trade fair calendar, which moves hotel rates on its own",
    weatherNote: "Hot and very humid May to Sep. Typhoon season runs roughly Jul to Sep, and a high signal can close the city for a day",
    cheapestWindow: "Jul to Sep, the hot humid stretch",
    avoidIfBudget: "Chinese New Year, Oct, and any major fair or event week",
    confidence: "medium",
    note: "Hotel rates here track the convention calendar as much as the weather, which is why a midweek night in Oct can cost more than a weekend in Aug. Autumn is the nicest time to be there and is priced accordingly."
  },
  {
    country: "Hungary", slug: "hungary", hasGuide: true, region: "Europe",
    peak: "Jun to Aug, plus the Dec market weeks",
    shoulder: "Apr to May, Sep to Oct",
    off: "Jan to Mar, and Nov",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "The summer city break season, the Aug festival run including Sziget, the Budapest Christmas markets, and New Year",
    weatherNote: "Hot summers and cold grey winters. The thermal baths are a year-round draw and are busiest in winter",
    cheapestWindow: "Jan to Mar, outside the New Year week",
    avoidIfBudget: "New Year in Budapest, the Aug festival weeks, and the Dec market weeks",
    confidence: "high",
    note: "Budapest carries the whole pattern and it is demand-led. Late winter is the quiet window and the baths are arguably better then, so what you lose is terrace weather rather than access."
  },
  {
    country: "Iceland", slug: "iceland", hasGuide: true, region: "Europe",
    peak: "Jun to Aug",
    shoulder: "May, Sep",
    off: "Nov to Mar, outside Christmas and New Year",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "The midnight sun and the open highland season, cruise calls, Christmas and New Year, and a second smaller peak for northern lights in Feb and Mar",
    weatherNote: "Highland F-roads open only in summer. Winter brings storms, short days and genuine road closures",
    cheapestWindow: "Late Oct to early Dec, and Jan",
    avoidIfBudget: "Jul, and Christmas and New Year",
    confidence: "high",
    note: "Winter is quieter than summer but not empty, because the northern lights have a season of their own, which makes Feb and Mar busier than Nov or Jan. The honest catch in winter is access rather than price: interior routes are closed and a storm can rewrite a day."
  },
  {
    country: "India", slug: "india", hasGuide: true, region: "Asia",
    peak: "Oct to Mar",
    shoulder: "Apr, Sep",
    off: "Jun to Aug, the monsoon, and the hottest weeks in the plains",
    months: ["peak","peak","peak","shoulder","shoulder","off","off","off","shoulder","peak","peak","peak"],
    peakDriver: "The cool dry season, Diwali in Oct or Nov, the Indian wedding season, and Christmas and New Year in Goa and Rajasthan",
    weatherNote: "The southwest monsoon arrives around Jun and runs into Sep. Apr to Jun is extremely hot in the north, and hill stations invert, peaking in summer",
    cheapestWindow: "Jun to Sep across most of the country",
    avoidIfBudget: "Christmas and New Year in Goa, the Diwali travel weeks, and Rajasthan in Dec and Jan",
    confidence: "high",
    note: "The country runs on the monsoon, and it flips the map. The plains are quietest and hardest in summer, while the hills and Ladakh are only really open then. Kerala and the west coast in the monsoon are quiet and cheap by design rather than by accident."
  },
  {
    country: "Indonesia", slug: "indonesia", hasGuide: true, region: "Asia",
    peak: "Jul to Aug, and mid-Dec to early Jan",
    shoulder: "Apr to Jun, Sep",
    off: "Nov to Mar, the wet season, outside the New Year weeks",
    months: ["shoulder","off","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "The dry season, European and Australian summer holidays, Christmas and New Year in Bali, and Idul Fitri domestic travel, whose dates shift each year",
    weatherNote: "Dry roughly Apr to Oct and wet Nov to Mar with afternoon downpours. Nyepi, Bali's day of silence in Mar, closes the island for a day, airport included",
    cheapestWindow: "Feb to Mar, and Nov",
    avoidIfBudget: "Jul and Aug in Bali, Christmas and New Year",
    confidence: "high",
    note: "Bali sets the pattern for the whole country, and it follows northern hemisphere holidays more than local weather. The shoulder months keep most of the dry season. Do check the Nyepi date, because nothing moves on the island that day, flights included."
  },
  {
    country: "Ireland", slug: "ireland", hasGuide: true, region: "Europe",
    peak: "Jun to Aug",
    shoulder: "May, Sep to Oct",
    off: "Nov to Feb",
    months: ["off","off","shoulder","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "Summer holidays, long evenings on the west coast, Saint Patrick's Day in Mar, which spikes Dublin sharply, and big match and concert weekends",
    weatherNote: "Wet and mild all year. Summer means longer days rather than reliable sun",
    cheapestWindow: "Nov to Feb, outside Christmas and New Year",
    avoidIfBudget: "Saint Patrick's weekend in Dublin, Jul and Aug on the Wild Atlantic Way, and big match weekends",
    confidence: "high",
    note: "You are paying for daylight rather than sunshine, since it rains in every month. Sep still has long evenings and noticeably fewer people. Dublin rates also spike on event weekends in a way that has nothing to do with the season."
  },
  {
    country: "Italy", slug: "italy", hasGuide: true, region: "Europe",
    peak: "Jun to Aug, plus Easter week and the mid-Aug holiday",
    shoulder: "Apr to May, Sep to Oct",
    off: "Nov to Mar, outside Christmas, New Year and Venice Carnival",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "European school holidays, Ferragosto in mid-Aug, Easter, Venice Carnival in Feb, and the northern Christmas markets",
    weatherNote: "Hot humid city summers. Rome, Florence and Venice are draining in Jul and Aug",
    cheapestWindow: "Nov, and late Jan to Feb outside Carnival",
    avoidIfBudget: "Ferragosto week, Easter week, and Aug on the coast and the lakes",
    confidence: "high",
    note: "Aug splits the country. Italians head for the coast and the lakes while the big cities thin out, so a city break can be better value in Aug than in May, just a great deal hotter. The shoulder months are the standing recommendation for a reason."
  },
  {
    country: "Jamaica", slug: "jamaica", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to Apr",
    shoulder: "May to Jun, Nov",
    off: "Aug to Oct",
    months: ["peak","peak","peak","peak","shoulder","shoulder","shoulder","off","off","off","shoulder","peak"],
    peakDriver: "North Americans escaping winter, Christmas and New Year, US spring break, and Reggae Sumfest in Jul",
    weatherNote: "The Atlantic hurricane season runs Jun to Nov, with the highest risk Aug to Oct, and Sep and Oct are the wettest months",
    cheapestWindow: "Sep to Oct",
    avoidIfBudget: "Christmas and New Year, and Mar",
    confidence: "high",
    note: "The same trade as the rest of the Caribbean: the quiet weeks are the storm weeks. Nov and early Dec are the compromise, past most of the risk and before the winter rates arrive."
  },
  {
    country: "Japan", slug: "japan", hasGuide: true, region: "Asia",
    peak: "Late Mar to Apr for cherry blossom, and Nov for autumn leaves",
    shoulder: "May to Jun, Oct",
    off: "Jan to Feb, and Jul to early Sep, which is hot and humid",
    months: ["off","off","peak","peak","shoulder","shoulder","off","off","off","shoulder","peak","shoulder"],
    peakDriver: "Cherry blossom, autumn foliage, Golden Week in early May, and the New Year holidays",
    weatherNote: "A rainy season from Jun to mid-Jul in much of the country, and typhoons are possible Aug to Sep",
    cheapestWindow: "Winter, Jan to Feb, outside the New Year period, and the humid midsummer lull",
    avoidIfBudget: "The cherry blossom weeks, Golden Week, and New Year",
    confidence: "high",
    note: "Crowds and rates swing hard around cherry blossom and Golden Week, and the shoulder months give similar weather with less of both. No price figure is quoted because it varies too much by city and route."
  },
  {
    country: "Laos", slug: "laos", hasGuide: true, region: "Asia",
    peak: "Nov to Feb",
    shoulder: "Mar, Oct",
    off: "May to Sep",
    months: ["peak","peak","shoulder","shoulder","off","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "The cool dry season, Christmas and New Year in Luang Prabang, and Lao New Year in mid-Apr",
    weatherNote: "Hot Mar to May, with agricultural burning haze in Mar and Apr that can sit over the north for weeks. The wet season runs roughly Jun to Oct",
    cheapestWindow: "May to Sep",
    avoidIfBudget: "Christmas and New Year in Luang Prabang",
    confidence: "medium",
    note: "The burning haze in Mar and Apr is the underrated one. Rates are still shoulder-level then, but the air and the views are poor, so the cheap-looking window is not the good-value one. Nov to Feb is the best weather and is priced for it."
  },
  {
    country: "Mexico", slug: "mexico", hasGuide: true, region: "Americas",
    peak: "Mid-Dec to Apr, with a second peak in Jul and Aug",
    shoulder: "May to early Jun, Nov",
    off: "Sep to Oct",
    months: ["peak","peak","peak","peak","shoulder","shoulder","peak","peak","off","off","shoulder","peak"],
    peakDriver: "North Americans escaping winter, Christmas and New Year, US spring break in Mar, Holy Week, Mexican school holidays in Jul and Aug, and Day of the Dead in early Nov in Oaxaca and Mexico City",
    weatherNote: "Hurricane season runs Jun to Nov on both coasts with the highest risk Aug to Oct, inland cities are unaffected by storms, and sargassum can affect Caribbean beaches in summer",
    cheapestWindow: "Sep to Oct",
    avoidIfBudget: "Christmas and New Year, Mar, and Holy Week",
    confidence: "high",
    note: "Two peaks, one foreign and one domestic. The Sep to Oct low is a real trade, since it is the wettest and stormiest stretch, which is exactly why demand falls. Inland cities such as Mexico City and Oaxaca sidestep the storm question, and Day of the Dead spikes specific cities rather than the whole country."
  },
  {
    country: "Morocco", slug: "morocco", hasGuide: true, region: "Africa",
    peak: "Mar to May, and Sep to Nov",
    shoulder: "Dec to Feb",
    off: "Jul to Aug inland",
    months: ["shoulder","shoulder","peak","peak","peak","shoulder","off","off","peak","peak","peak","shoulder"],
    peakDriver: "Mild sightseeing weather in spring and autumn, European school holidays, Christmas and New Year in Marrakech, and Ramadan and Eid, whose dates shift earlier each year",
    weatherNote: "Marrakech, Fes and the desert are punishing in Jul and Aug, while the Atlantic coast at Essaouira stays cool and is busiest then",
    cheapestWindow: "Jul to Aug inland, and Jan to Feb outside the holiday weeks",
    avoidIfBudget: "Easter week, and Christmas and New Year in Marrakech",
    confidence: "medium",
    note: "Spring and autumn are the comfortable months and they cost the most. Midsummer is quiet inland because the heat is genuinely hard, and the coast inverts, so Essaouira fills up as Marrakech empties."
  },
  {
    country: "Namibia", slug: "namibia", hasGuide: true, region: "Africa",
    peak: "Jul to Oct",
    shoulder: "Apr to Jun, Nov",
    off: "Jan to Mar",
    months: ["off","off","off","shoulder","shoulder","shoulder","peak","peak","peak","peak","shoulder","shoulder"],
    peakDriver: "The dry season, when animals concentrate at waterholes, plus European and North American summer holidays",
    weatherNote: "The rainy season runs roughly Dec to Mar, hot with green landscapes and dispersed wildlife, and some lodges close or cut back then",
    cheapestWindow: "Jan to Mar, and the green shoulder in Apr and May",
    avoidIfBudget: "Jul to Sep, and school holiday weeks",
    confidence: "high",
    note: "This is a supply story as much as a demand one. Lodge beds are limited and the dry season fills them, so Jul to Oct books out far ahead. The green season is quieter and beautiful, with harder wildlife spotting as the trade."
  },
  {
    country: "Netherlands", slug: "netherlands", hasGuide: true, region: "Europe",
    peak: "Apr for tulip season, and Jul to Aug",
    shoulder: "May to Jun, Sep",
    off: "Nov to Feb, outside Christmas and New Year",
    months: ["off","off","shoulder","peak","shoulder","shoulder","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "Keukenhof and the bulb fields from late Mar to mid-May, King's Day in late Apr, summer holidays, and the winter light festival in Amsterdam",
    weatherNote: "Cool and wet through much of the year, and Apr can be cold as well as busy",
    cheapestWindow: "Jan to Feb, and Nov",
    avoidIfBudget: "The King's Day weekend, tulip weekends in Apr, and Aug",
    confidence: "high",
    note: "Amsterdam's tulip peak is a narrow, well known window and hotel rates know it. The King's Day weekend in late Apr is the single hardest weekend of the year to book well. May keeps a good deal of the flowers and loses some of the crowd."
  },
  {
    country: "New Zealand", slug: "new-zealand", hasGuide: true, region: "Oceania",
    peak: "Dec to Feb, and Jul to Sep in the ski towns",
    shoulder: "Mar to Apr, Oct to Nov",
    off: "May to Jun",
    months: ["peak","peak","shoulder","shoulder","off","off","peak","peak","peak","shoulder","shoulder","peak"],
    peakDriver: "The southern summer, New Zealand school holidays around Christmas, the Queenstown ski season, and the Great Walks booking season",
    weatherNote: "Seasons are reversed. The South Island can be cold and unsettled in any month, and some alpine tracks and roads are seasonal",
    cheapestWindow: "May to Jun",
    avoidIfBudget: "Christmas through late Jan, and the Jul ski school holidays",
    confidence: "high",
    note: "Campervans and rental cars swing harder with the season here than hotels do. Mar and Apr are the quiet favourite, with settled autumn weather and tracks still open. May and Jun are the cheapest and are honestly wetter and colder."
  },
  {
    country: "Norway", slug: "norway", hasGuide: true, region: "Europe",
    peak: "Jun to Aug",
    shoulder: "May, Sep",
    off: "Oct to Apr, outside Christmas and the ski and northern lights weeks",
    months: ["off","shoulder","shoulder","off","shoulder","peak","peak","peak","shoulder","off","off","peak"],
    peakDriver: "The midnight sun, the fjord and cruise season, the Norwegian common holiday in Jul, and a separate winter draw for northern lights in Tromso and skiing from Feb",
    weatherNote: "Fjord and mountain services are seasonal, and some roads, ferries and lodges only run in summer",
    cheapestWindow: "Late Oct to Nov, and Jan",
    avoidIfBudget: "Jul, Christmas and New Year, and the Feb to Mar northern lights weeks in Tromso",
    confidence: "medium",
    note: "Two separate seasons with different geography: the fjords in summer and the far north in winter. Late autumn falls between them and is quiet because there is genuinely less to do, with short days and closed summer routes."
  },
  {
    country: "Oman", slug: "oman", hasGuide: true, region: "Middle East",
    peak: "Nov to Mar", shoulder: "Apr, Oct", off: "May to Sep",
    months: ["peak","peak","peak","shoulder","off","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "Cool, dry winter weather, the wadi and diving season, and the Christmas and New Year window",
    weatherNote: "May to Sep is punishing inland and humid on the coast, which is exactly when hotel rates fall. Salalah is the exception: the khareef monsoon turns the Dhofar hills green from about Jun to Sep, so southern Oman runs its own peak in the months the north empties out",
    cheapestWindow: "May to Sep in the north",
    avoidIfBudget: "Christmas and New Year, and Salalah during the khareef",
    confidence: "high",
    note: "The national pattern is as predictable as the UAE's, but Oman has a split personality. North in winter, south in summer. If you are going to Salalah in the khareef, treat it as high season and price it that way."
  },
  {
    country: "Philippines", slug: "philippines", hasGuide: true, region: "Asia",
    peak: "Dec to Feb, plus Holy Week",
    shoulder: "Mar to May, Nov",
    off: "Jun to Oct",
    months: ["peak","peak","shoulder","shoulder","shoulder","off","off","off","off","off","shoulder","peak"],
    peakDriver: "The cool dry season, Christmas and New Year, Holy Week, which is a major domestic travel week, and Chinese New Year",
    weatherNote: "Typhoon season runs roughly Jun to Nov and peaks Jul to Oct, concentrated on Luzon and the eastern seaboard, while Mindanao sees far fewer storms. Mar to May is hot and dry",
    cheapestWindow: "Jun to Oct",
    avoidIfBudget: "Christmas and New Year, and Holy Week",
    confidence: "high",
    note: "Holy Week is the domestic peak and it fills ferries and island resorts even when foreign demand is quiet. The typhoon window is wide but uneven across a country this spread out, so the risk is not the same in every island group."
  },
  {
    country: "Poland", slug: "poland", hasGuide: true, region: "Europe",
    peak: "Jun to Aug, plus the Dec market weeks",
    shoulder: "May, Sep",
    off: "Jan to Mar, and Nov",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "The summer city break and Baltic coast season, the Krakow and Wroclaw Christmas markets, All Saints in early Nov, and the long weekends in May",
    weatherNote: "Cold winters with short days. Warm summers, and the Baltic coast has a short concentrated season",
    cheapestWindow: "Jan to Mar",
    avoidIfBudget: "Aug on the Baltic coast, New Year, and the Dec market weeks",
    confidence: "medium",
    note: "Poland stays inexpensive by European standards in every month, so the season matters less to a budget here than the flight does. The Baltic coast is the exception, with a short season and real Jul and Aug pricing."
  },
  {
    country: "Portugal", slug: "portugal", hasGuide: true, region: "Europe",
    peak: "Jul to Aug",
    shoulder: "Apr to Jun, Sep to Oct",
    off: "Nov to Mar on the mainland, outside the New Year week",
    months: ["off","off","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "The Algarve beach season, European school holidays, Lisbon's Jun street festivals, and New Year in Madeira and Porto",
    weatherNote: "Hot dry summers in the south. Atlantic winters are mild but wet, and the ocean stays cool even in high summer",
    cheapestWindow: "Nov to Feb on the mainland",
    avoidIfBudget: "Aug in the Algarve, and New Year in Madeira",
    confidence: "high",
    note: "The Algarve carries almost all of the seasonality, while Lisbon and Porto are much steadier and pleasant in the shoulder months. Madeira runs on its own clock, with New Year its single biggest week."
  },
  {
    country: "Singapore", slug: "singapore", hasGuide: true, region: "Asia",
    peak: "Dec to early Jan, Chinese New Year, and the Grand Prix week",
    shoulder: "Feb to Apr, Jul to Aug",
    off: "Nov, and the quieter weeks of Feb and May",
    months: ["peak","off","shoulder","shoulder","off","shoulder","shoulder","shoulder","shoulder","shoulder","off","peak"],
    peakDriver: "Christmas and New Year, Chinese New Year in late Jan or Feb, the night Grand Prix in Sep or Oct, and the convention and school holiday calendar",
    weatherNote: "Equatorial and hot all year. The wetter northeast monsoon runs roughly Nov to Jan, but rain is short and heavy rather than seasonal in the usual sense",
    cheapestWindow: "Late Jan to Feb outside Chinese New Year, and May",
    avoidIfBudget: "The Grand Prix week, Chinese New Year, Christmas and New Year",
    confidence: "medium",
    note: "There is almost no weather season here, so the swing is events and holidays. That makes Singapore the clearest argument against monthly price charts: a chart would imply a pattern the climate does not have, when what actually moves a room rate is whether a race or a convention is in town that week."
  },
  {
    country: "South Africa", slug: "south-africa", hasGuide: true, region: "Africa",
    peak: "Dec to mid-Jan on the coast, and Jun to Sep for game viewing",
    shoulder: "Feb to Apr, Oct to Nov",
    off: "May, and Jun to Aug in Cape Town",
    months: ["peak","shoulder","shoulder","shoulder","off","off","off","off","peak","shoulder","shoulder","peak"],
    peakDriver: "South African summer school holidays around Christmas, the Cape Town summer season, and the dry winter months when Kruger wildlife concentrates at water",
    weatherNote: "Seasons are reversed. Cape Town winters from Jun to Aug are wet and windy, while the Kruger region is dry and mild in those same months",
    cheapestWindow: "May, and the Cape winter from Jun to Aug",
    avoidIfBudget: "Christmas to mid-Jan in Cape Town and along the Garden Route",
    confidence: "high",
    note: "Two peaks pulling opposite ways: the Cape peaks in the southern summer and the safari areas peak in the southern winter. Feb and Mar are the underrated window, still warm in the Cape with the holiday crowds gone."
  },
  {
    country: "South Korea", slug: "south-korea", hasGuide: true, region: "Asia",
    peak: "Late Mar to May, and Oct to early Nov",
    shoulder: "Jun, Sep",
    off: "Dec to Feb, and Jul to Aug",
    months: ["off","off","peak","peak","peak","shoulder","off","off","shoulder","peak","peak","shoulder"],
    peakDriver: "Cherry blossom from late Mar, autumn foliage from Oct, and Chuseok and Lunar New Year, whose dates move and which fill domestic transport",
    weatherNote: "Monsoon rains from late Jun into Jul, typhoons possible Aug to Sep, and cold dry winters",
    cheapestWindow: "Dec to Feb, outside the New Year weeks and the ski areas",
    avoidIfBudget: "The cherry blossom weeks, the autumn foliage peak, and the Chuseok travel days",
    confidence: "high",
    note: "Spring and autumn are short, lovely and crowded, and demand tracks them closely. Winter is the honest quiet window in Seoul, cold and dry with everything open. The two big family holidays fill trains and buses rather than hotels."
  },
  {
    country: "Spain", slug: "spain", hasGuide: true, region: "Europe",
    peak: "Jul to Aug on the coast, plus Easter week",
    shoulder: "Apr to Jun, Sep to Oct",
    off: "Nov to Mar on the mainland, outside the Christmas weeks",
    months: ["off","off","off","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "European school holidays, Holy Week, Seville's Apr fair, Las Fallas in Mar in Valencia, San Fermin in Jul in Pamplona, and Canary Islands winter demand",
    weatherNote: "Madrid, Seville and Cordoba are extremely hot in Jul and Aug, the north coast is mild and wetter, and the Canaries are a winter destination",
    cheapestWindow: "Nov to Feb on the mainland, and midsummer in the hot interior cities",
    avoidIfBudget: "Holy Week, Aug on the Mediterranean coast, and festival weeks in the host city",
    confidence: "high",
    note: "Spain inverts in midsummer: the interior cities are quieter in Aug because the heat drives people out, while the coast and the islands are at their busiest. The Canaries invert again, peaking in the northern winter."
  },
  {
    country: "Sri Lanka", slug: "sri-lanka", hasGuide: true, region: "Asia",
    peak: "Dec to Mar on the west and south coasts, Apr to Sep on the east coast",
    shoulder: "Apr, and Oct to Nov, between the two monsoons",
    off: "May to Sep in the southwest, Nov to Jan in the east",
    months: ["shoulder","peak","peak","shoulder","off","off","off","off","off","shoulder","shoulder","peak"],
    peakDriver: "Two monsoons that split the island's season in half, plus Christmas and New Year, and Sinhala and Tamil New Year in mid-Apr",
    weatherNote: "The southwest monsoon runs roughly May to Sep and hits the west and south coasts and the hill country. The northeast monsoon runs roughly Oct to Jan and hits the east",
    cheapestWindow: "May to Sep in the southwest, which is when the east is at its best",
    avoidIfBudget: "Christmas and New Year on the south coast",
    confidence: "high",
    note: "There is no bad time to visit Sri Lanka, only a wrong coast for the month. That is exactly why a single monthly figure for the country would be meaningless: Galle and Arugam Bay are busy and quiet in opposite halves of the year."
  },
  {
    country: "Sweden", slug: "sweden", hasGuide: true, region: "Europe",
    peak: "Jun to Aug",
    shoulder: "May, Sep",
    off: "Nov to Mar, outside Christmas and the northern lights weeks",
    months: ["off","off","off","shoulder","shoulder","peak","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "Long Nordic summer days, Midsummer in late Jun, the Swedish holiday month of Jul, and a separate winter season in Lapland",
    weatherNote: "Short dark winter days in the south and polar night in the far north. Summers are mild rather than hot",
    cheapestWindow: "Jan to Mar in Stockholm",
    avoidIfBudget: "Midsummer week, Jul in the archipelago, and Christmas and New Year",
    confidence: "medium",
    note: "Stockholm empties in Jul when Swedes take their own holidays, which quietly makes the city easier even in peak season, though some restaurants close with it. Lapland runs a separate winter season with its own peak."
  },
  {
    country: "Switzerland", slug: "switzerland", hasGuide: true, region: "Europe",
    peak: "Jul to Aug, and Dec to Feb in the ski resorts",
    shoulder: "Jun, Sep to Oct",
    off: "Late Apr to May, and Nov",
    months: ["peak","peak","shoulder","off","off","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "The Alpine hiking season, the ski season, Christmas and New Year in the mountains, and the summer festival calendar in the cities",
    weatherNote: "Between seasons many mountain lifts, passes and hotels close for maintenance, which is what makes those weeks quiet",
    cheapestWindow: "Nov, and the weeks after the lifts shut in spring",
    avoidIfBudget: "Christmas and New Year, the Feb ski weeks, and mid-Jul to mid-Aug",
    confidence: "high",
    note: "The between-seasons gaps are the real Swiss discount and they carry a genuine catch: the cable car you wanted may be shut. Zurich and Geneva stay open and steady all year, and their rates follow conferences more than the season."
  },
  {
    country: "Taiwan", slug: "taiwan", hasGuide: true, region: "Asia",
    peak: "Oct to Dec, plus Lunar New Year",
    shoulder: "Mar to Apr, Sep",
    off: "Jun to Aug",
    months: ["shoulder","shoulder","shoulder","shoulder","shoulder","off","off","off","shoulder","peak","peak","peak"],
    peakDriver: "Dry mild autumn weather, Lunar New Year in late Jan or Feb, when domestic travel surges and many businesses close, and cherry blossom in Feb and Mar",
    weatherNote: "Plum rains in May and Jun, typhoon season roughly Jul to Sep, and hot humid summers",
    cheapestWindow: "Jun to Aug, accepting heat and typhoon risk",
    avoidIfBudget: "Lunar New Year, and the Oct to Nov autumn peak",
    confidence: "medium",
    note: "Autumn is the best weather and the busiest stretch. Lunar New Year is the one to plan around: transport books out and many small businesses close for the week, so availability is the problem rather than price."
  },
  {
    country: "Thailand", slug: "thailand", hasGuide: true, region: "Asia",
    peak: "Nov to Feb",
    shoulder: "Mar, Oct",
    off: "May to Sep on the Andaman coast",
    months: ["peak","peak","shoulder","shoulder","off","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "The cool dry season, Christmas and New Year, Chinese New Year, and Songkran in mid-Apr",
    weatherNote: "The two coasts differ. The Andaman side around Phuket and Krabi is wettest roughly May to Oct, while the Gulf side around Koh Samui is wettest Oct to Dec, and Bangkok is hottest Mar to May",
    cheapestWindow: "May to Sep on the Andaman coast, and the Gulf islands in their own low weeks",
    avoidIfBudget: "Christmas and New Year, Songkran, and Feb",
    confidence: "high",
    note: "The two coasts run on different clocks, which is the single most useful thing to know here: when Phuket is wet, Koh Samui is often fine. Songkran is a real spike and a genuine reason to go, as long as you know it is coming."
  },
  {
    country: "Turkey", slug: "turkey", hasGuide: true, region: "Middle East",
    peak: "Jul to Aug on the coast, Apr to Jun and Sep to Oct in Istanbul",
    shoulder: "May to Jun, Sep to Oct on the coast",
    off: "Nov to Mar on the coast",
    months: ["off","off","off","peak","shoulder","shoulder","peak","peak","shoulder","shoulder","off","shoulder"],
    peakDriver: "European school holidays on the Aegean and Mediterranean coasts, mild city weather in spring and autumn, and Ramadan and Eid, whose dates shift earlier each year",
    weatherNote: "Coastal summers are very hot, Istanbul is grey and wet in winter, and Cappadocia is cold in winter with balloon flights weather-dependent all year",
    cheapestWindow: "Nov to Mar on the coast, where many resorts close, and Jan to Feb in Istanbul",
    avoidIfBudget: "Aug on the coast, the Eid travel days, and Christmas and New Year in Istanbul",
    confidence: "high",
    note: "Istanbul and the coast peak at different times, so the country has two seasons rather than one. Coastal resorts genuinely close in winter, so a quiet month can mean a closed hotel, while Istanbul is open all year."
  },
  {
    country: "United Arab Emirates", slug: "uae", hasGuide: true, region: "Middle East",
    peak: "Nov to Mar",
    shoulder: "Apr, Oct",
    off: "Jun to Sep",
    months: ["peak","peak","peak","shoulder","shoulder","off","off","off","off","shoulder","peak","peak"],
    peakDriver: "Cool winter weather, Christmas and New Year, the winter events and conference calendar, and the shopping festival weeks",
    weatherNote: "Jun to Sep is extremely hot and humid, which is exactly when hotel rates are at their lowest. Ramadan and Eid shift earlier each year and change opening hours",
    cheapestWindow: "Jun to Sep",
    avoidIfBudget: "Christmas and New Year, Feb to Mar, and major event and race weekends",
    confidence: "high",
    note: "One of the most predictable patterns anywhere, because the outdoor season and the price season are the same thing. Summer is genuinely cheap and the city is built to be lived indoors, which is a real if unglamorous option."
  },
  {
    country: "United Kingdom", slug: "united-kingdom", hasGuide: true, region: "Europe",
    peak: "Jul to Aug, plus the Edinburgh festival month",
    shoulder: "Apr to Jun, Sep to Oct",
    off: "Nov to Feb, outside Christmas and New Year",
    months: ["off","off","shoulder","shoulder","shoulder","shoulder","peak","peak","shoulder","shoulder","off","peak"],
    peakDriver: "UK school summer holidays, the half-term weeks through the year, the Edinburgh festivals in Aug, Wimbledon from late Jun, and the Christmas market weeks",
    weatherNote: "Mild and wet year round. Summer means longer days more than warmer ones, and Scotland has midges through summer",
    cheapestWindow: "Jan to Feb, and Nov",
    avoidIfBudget: "Aug in Edinburgh, the half-term weeks, and Christmas and New Year",
    confidence: "high",
    note: "Edinburgh in Aug is the sharpest single spike in the country, a whole city on festival pricing, while London barely notices it. Half-term weeks lift family destinations for a few days at a time and are easy to miss when planning from abroad."
  },
  {
    country: "Vietnam", slug: "vietnam", hasGuide: true, region: "Asia",
    peak: "Nov to Apr in the south and centre, Jun to Aug for domestic beach travel",
    shoulder: "May, Sep to Oct",
    off: "It varies by region, so see the note",
    months: ["peak","peak","peak","peak","off","shoulder","shoulder","shoulder","off","shoulder","peak","peak"],
    peakDriver: "Christmas and New Year, Tet, the lunar new year in late Jan or Feb, whose date moves, and Vietnamese school holidays at the beaches",
    weatherNote: "Three climates in one country: the north is coldest Dec to Feb, the centre is wettest Sep to Nov with typhoon risk, and the south is dry Dec to Apr and wet May to Oct",
    cheapestWindow: "May to Sep in the north and south, avoiding the centre in Oct and Nov",
    avoidIfBudget: "Tet, Christmas and New Year, and Vietnamese school holiday weeks on the coast",
    confidence: "medium",
    note: "Vietnam is too long for a single season, which is why we do not give it one. Tet is the one date that matters everywhere: transport fills, rates firm up and many family-run places close for several days."
  }
];
