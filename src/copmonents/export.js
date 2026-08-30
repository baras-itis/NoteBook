document.getElementById('export-pdf').addEventListener('click', function () {
    const canvases = document.querySelectorAll('canvas');

    if (canvases.length === 0) {
        alert('Нет canvas для экспорта');
        return;
    }

    if (typeof window.jspdf === 'undefined') {
        alert('Библиотека jsPDF не загружена. Проверьте подключение.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    canvases.forEach((canvas, index) => {
        if (index > 0) {
            pdf.addPage();
        }
        const bwCanvas = document.createElement('canvas');
        bwCanvas.width = canvas.width;
        bwCanvas.height = canvas.height;
        const ctx = bwCanvas.getContext('2d');
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, bwCanvas.width, bwCanvas.height);
        ctx.drawImage(canvas, 0, 0);
        const imgData = bwCanvas.toDataURL('image/png');

        const margin = 0;
        const imgWidth = pageWidth - (margin * 2);
        const imgHeight = (canvas.height / canvas.width) * imgWidth;

        let finalImgHeight = imgHeight;
        let finalImgWidth = imgWidth;

        if (imgHeight > pageHeight - (margin * 2)) {
            finalImgHeight = pageHeight - (margin * 2);
            finalImgWidth = (canvas.width / canvas.height) * finalImgHeight;
        }

        const x = (pageWidth - finalImgWidth) / 2;
        const y = (pageHeight - finalImgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, finalImgWidth, finalImgHeight);
    });

    pdf.save(`drawing-${Date.now()}.pdf`);
});