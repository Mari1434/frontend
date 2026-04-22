function InputSubmit({ texto }) {
    return (
        <button 
            className="bg-[#e5e5e5] hover:bg-[#d4d4d4] transition-colors text-[#1a1a1a] text-lg rounded-md w-full py-2.5 mt-2" 
            type="submit"
        >
            {texto}
        </button>
    );
}

export default InputSubmit;