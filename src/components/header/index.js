export const langDropdown = {
	open: false,
	allLangs: ['En', 'Ua', 'Test'],
	langs: [],
	currentLang: '',
	init() {
		this.currentLang = this.allLangs[0]
		this.langs = this.allLangs.filter(item => item !== this.currentLang)
		console.log(this.langs)
	},
	clickItemHandler(lang) {
		this.currentLang = lang
		this.langs = this.allLangs.filter(item => item !== lang)
		this.open=false
	}
}