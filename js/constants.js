// State descriptions in Bengali and English
export const stateDescriptions = {
    solid: {
        bengali: 'কঠিন',
        english: 'Solid',
        description: 'কঠিন অবস্থায় কণাগুলি একটি নির্দিষ্ট গঠনে সাজানো থাকে এবং শুধুমাত্র তাদের স্থানে কম্পন করে।',
        particleInfo: '❄️ কণাগুলি জালিকার মতো সাজানো | Particles arranged in a grid pattern'
    },
    liquid: {
        bengali: 'তরল',
        english: 'Liquid',
        description: 'তরল অবস্থায় কণাগুলি একে অপরের চারপাশে প্রবাহিত হতে পারে কিন্তু একসাথে থাকে।',
        particleInfo: '💧 কণাগুলি প্রবাহিত হয় এবং নিচে জমা হয় | Particles flow and settle at bottom'
    },
    gas: {
        bengali: 'বায়বীয়',
        english: 'Gas',
        description: 'বায়বীয় অবস্থায় কণাগুলি দ্রুত চলাচল করে এবং সম্পূর্ণ স্থান জুড়ে ছড়িয়ে পড়ে।',
        particleInfo: '💨 কণাগুলি দ্রুত গতিতে সব জায়গায় ছড়িয়ে পড়ে | Particles spread rapidly everywhere'
    }
};

export const stateColors = {
    solid: '#0066cc',
    liquid: '#00aa66',
    gas: '#cc6600'
};
