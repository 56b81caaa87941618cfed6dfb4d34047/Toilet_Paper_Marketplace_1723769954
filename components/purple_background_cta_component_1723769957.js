Vue.component("purple_background_cta_component_1723769957", {
  template: `
    <section id="cta-section-container" class="relative bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          <!-- Radial gradient -->
          <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
            <div class="bg-purple-500 absolute inset-0 rounded-full blur-[120px] opacity-70"></div>
            <div class="absolute w-1/4 h-1/4 rounded-full blur-[40px] bg-purple-400"></div>
          </div>
          <!-- Blurred shape -->
          <div class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="custom-gradient" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stop-color="#A855F7" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#custom-gradient)" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
            </svg>
          </div>
          <!-- Content -->
          <div class="max-w-3xl mx-auto text-center">
            <div class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 text-2xl font-medium pb-3">
              Flush-worthy Deals on Every Roll
            </div>
            <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Roll into Savings: Your Toilet Paper Marketplace
            </h2>
            <p class="text-lg mb-8 text-slate-400">
              Discover the ultimate destination for all your toilet paper needs. From budget-friendly bulk buys to luxurious quilted options, we've got your bottom line covered.
            </p>
            <a href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">
              Get Started <span class="ml-1 text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">-&gt;</span>
            </a>
          </div>
          <!-- Form -->
          <div class="mt-8">
            <form @submit.prevent="submitComment" class="max-w-md mx-auto">
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" id="email" v-model="email" required class="w-full px-3 py-2 text-slate-900 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
              </div>
              <div class="mb-4">
                <label for="comment" class="block text-sm font-medium text-slate-300 mb-2">Comment</label>
                <textarea id="comment" v-model="comment" required rows="4" class="w-full px-3 py-2 text-slate-900 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
              </div>
              <button type="submit" class="w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Submit Comment
              </button>
            </form>
          </div>
          <!-- Image -->
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1723769954/main/images/60d5900714d04b929123b69b32108ca0.jpeg" alt="CTA Image" class="w-full h-auto rounded-lg mt-8" />
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      email: '',
      comment: ''
    };
  },
  methods: {
    submitComment() {
      // Handle comment submission here
      console.log('Submitted comment:', this.email, this.comment);
      // Reset form fields
      this.email = '';
      this.comment = '';
    }
  }
});
