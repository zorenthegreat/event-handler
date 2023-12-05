const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Animals we Love ',
      description:
        'Everyone loves animals , We loves animals specially bird animals',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/animal-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Mental Health Consulting',
      description:
        "Mental Health is important just like our physical Health !",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/consulting-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Gaming Convention',
      description:
        'Gaming released our stress it is also produced some dopamine if you did something cool!',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/gaming-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }