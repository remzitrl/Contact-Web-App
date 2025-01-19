module.exports = {
    content: [
        "./Views/**/*.cshtml", // Tüm Razor view dosyalarını tarar
        "./wwwroot/js/**/*.js", // Eğer JavaScript ile Tailwind sınıfları kullanıyorsanız
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
